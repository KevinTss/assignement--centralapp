import { Helmet } from "react-helmet";

import favIco from "../../assets/favicon.ico";

const websiteName = "Finder";
const baseUrl = "https://kevintss.github.io/assignement--centralapp";
const title = `Find the best results online | ${websiteName}`;
const description = "Help people to find what they need";
const ogImage =
  "https://user-images.githubusercontent.com/39580007/112747176-e5aa6700-8fb3-11eb-9875-580f6989d45d.png";

const Head = () => (
  <Helmet>
    {/* General tags */}
    <title>{title}</title>
    <html lang="en" />
    <meta charset="utf-8" />
    <meta
      content="width=device-width, initial-scale=1, user-scalable=yes"
      name="viewport"
    />
    <meta
      content="web, websites, sites, app, apps, HTML, CSS, JavaScript"
      name="keywords"
    />
    <meta content={description} name="description" />
    <meta name="author" content="Kevin Tassi" />

    {/* Links */}
    <link href={baseUrl} rel="canonical" />
    <link rel="alternate" href={baseUrl} hreflang="x-default" />
    <link rel="icon" href={favIco} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap"
      rel="stylesheet"
    />

    {/* OpenGraph tags */}
    <meta property="og:url" content={baseUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={websiteName} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
  </Helmet>
);

export default Head;
