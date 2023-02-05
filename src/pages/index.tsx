import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";

import imageURL from "../assets/github_icons/github_500.png";

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
      <main className={style.main}>
        <div className={style.container}>
          <h1 className={style.title}>
            Git <span>Board</span>
          </h1>
          <div className={style.imageContainer}>
            <Image src={imageURL} alt="GitBoard" />
          </div>
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="Enter your github username"
              className={style.input}
            />
          </div>
        </div>
      </main>
    </>
  );
}
