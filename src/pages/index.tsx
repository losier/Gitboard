import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GitBoard</title>
        <meta
          name="description"
          content="A simple webApp for your github stats"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
