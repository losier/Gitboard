import React from "react";
import NextHead from "next/head";

const defaultTitle = "GitBoard";
const defaultDescription = "A simple webApp for your github stats";
const defaultOGURL = "https://gitboard.vercel.app/";

const Heads = (props: any) => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || defaultTitle}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ""} />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  </>
);

export default Heads;
