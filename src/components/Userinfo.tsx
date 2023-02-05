import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "../styles/Userinfo.module.css";

interface UserData {
  avatar_url: string;
  name: string;
  login: string;
  html_url: string;
  company: string;
  location: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Props {
  userData: UserData;
}

const Userinfo: React.FC<Props> = ({ userData }) => {
  return (
    <>
      <div className={styles.userInfo_container}>
        <div className={styles.imageContainer}>
          <Image src={userData.avatar_url} alt="user" />
        </div>
        <div className={styles.infoContainer}>
          <h1>{userData.name}</h1>
          <h2>{userData.login}</h2>
          <a href={userData.html_url}>Github Profile</a>
          <p>{userData.company}</p>
          <p>{userData.location}</p>
          <p>Joined on {userData.created_at}</p>
          <p>{userData.public_repos} Repositories</p>
          <p>{userData.followers} Followers</p>
          <p>{userData.following} Following</p>
        </div>
      </div>
    </>
  );
};

export default Userinfo;
