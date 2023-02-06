import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import { useState } from "react";

import imageURL from "../assets/github_icons/github_500.png";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const handleChange = (e: any) => setUsername(e.target.value);
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
            <Image className={style.image} src={imageURL} alt="GitBoard" />
          </div>
          <form
            className={style.inputContainer}
            onSubmit={(e) => {
              e.preventDefault();
              router.push({
                pathname: "/user",
                query: { username: username },
              });
            }}
          >
            <label htmlFor="username">Find your Github stats</label>
            <input name="username" type="text" onChange={handleChange} />
          </form>
        </div>
      </main>
    </>
  );
}
