import parse, { Element } from "html-react-parser";
import Image from "next/image";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Or any Prism theme you prefer

// Optionally, import additional languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";

const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;

          return (
            <Image
              className="object-cover object-center w-full my-3 rounded-md h-auto max-h-[300px] md:max"
              src={src}
              alt={alt}
              width={1280}
              height={620}
            />
          );
        }
      }
      if (domNode.name === "pre" && domNode.children && domNode.children[0]) {
        const code = domNode.children[0].children[0].data; // Extract code from <pre><code>
        const language = domNode.attribs.class || "javascript"; // Default to JavaScript if no class

        // Highlight the code using Prism
        const highlightedCode = Prism.highlight(
          code,
          Prism.languages[language],
          language
        );

        return (
          <pre
            className={`${language} bg-gray-800 text-gray-100 p-4 rounded overflow-auto`}
          >
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        );
      }
    },
  };

  const getParsedHTML = (body: string) => {
    return parse(body, options);
  };

  return <div className="rich-text">{getParsedHTML(body)}</div>;
};

export default PostBody;
