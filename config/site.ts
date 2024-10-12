export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  hash: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    codewars: string;
  };
  photo: string;
}
//TODO: Create the link for the image, will be a image on the side of Tech Exporer
// explore the world hash tag, has to be more below the text
// exclude some links, let only github and linkedin
//github will be there, first do the refactor on github, before activating the website
const siteConfig: SiteConfig = {
  siteName: "Tech Explorer",
  description:
    "A minimal portofolio and blog website, showing my expertise and spreading the rich content of programming.",
  currentlyAt: "Lisbon, PT",
  hash: "#exploringtech",
  socialLinks: {
    twitter: "some",
    youtube: "some",
    github: "https://github.com/gustavohdev",
    linkedin: "https://www.linkedin.com/in/ghsdevs/",
    instagram: "some insta",
    facebook: "facebook",
    codewars: "https://www.codewars.com/users/gustavohdev",
  },
  photo: `${process.env.NEXT_PUBLIC_ASSETS_URL}/1d9d8cb1-387e-407f-9cf0-31473bc92afe.png`,
};

export default siteConfig;
