import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "../elements/social-link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-6 border-t mt-10">
      {/* Title and Description */}
      {/* TODO: Try to ajust the margin top, to change in different screens, default, medium and small */}
      <PaddingContainer>
        <div className="">
          <Image
            className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover"
            src={siteConfig.photo}
            alt="me-icon-footer"
            width={160}
            height={160}
          ></Image>
        </div>
        <div>
          <h2 className="text-2xl font-semibold pt-1">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Soccially and Currently At */}
        <div className="flex flex-wrap justify-around gap-4 mt-6">
          <div>
            <div className="font-medium text-sm">{siteConfig.hash}</div>
            <div className="flex items-center gap-3 mt-2 text-neutral-600">
              {/* <SocialLink
                plataform="twitter"
                link={siteConfig.socialLinks.twitter}
              /> */}
              {/* <SocialLink
                plataform="instagram"
                link={siteConfig.socialLinks.instagram}
              /> */}
              <SocialLink
                plataform="github"
                link={siteConfig.socialLinks.github}
                aria-label="GitHub Profile"
              />
              {/* <SocialLink
                plataform="youtube"
                link={siteConfig.socialLinks.youtube}
              /> */}
              <SocialLink
                plataform="linkedin"
                link={siteConfig.socialLinks.linkedin}
                aria-label="LinkedIn Profile"
              />
              <SocialLink
                plataform="codewars"
                link={siteConfig.socialLinks.codewars}
                aria-label="CodeWars Profile"
              />
              {/* <SocialLink
                plataform="facebook"
                link={siteConfig.socialLinks.facebook}
              /> */}
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md text-sm">
              <div className="bg-emerald-600 rounded-full w-2 h-2" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="py-3 border-t flex flex-wrap items-center gap-4 justify-between mt-16">
          <div className="text-sm text-neutral-400">
            All rights reserverd | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm text-neutral-400">
            {/* TODO: Still to put a Link to my linkedin in the name */}
            Made by{" "}
            <Link
              href={siteConfig.socialLinks.linkedin}
              className="underline underline-offset-4"
              target="_blank"
            >
              {"@Gustavo Avide"}
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
