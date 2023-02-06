import React from "react";
import styles from "../styles/Userinfo.module.css";

import { FaSuitcase } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BsCalendarDate } from "react-icons/bs";

interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
}

interface Props {
  userData: UserData;
}

const Userinfo: React.FC<Props> = ({ userData }) => {
  return (
    <>
      <div className={styles.userInfo_container}>
        <div className={styles.avatar}>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} />
        </div>
        <div className={styles.userBasicInfo}>
          <div className={styles.name}>
            <h1>{userData.name}</h1>
            <a href={userData.html_url} target="_blank">
              ( <code>{`@${userData.login}`}</code> )
            </a>
          </div>
          <p>{userData.bio || ""}</p>
        </div>
        <div className={styles.userGeneralInfo}>
          <article className={styles.generalInfo_item}>
            <FaSuitcase className={styles.infoIcons} />
            <small>{userData.company || "No company found"}</small>
          </article>
          <article className={styles.generalInfo_item}>
            <ImLocation2 className={styles.infoIcons} />
            <small>{userData.location || "No location found"}</small>
          </article>
          <article className={styles.generalInfo_item}>
            <BsCalendarDate className={styles.infoIcons} />
            <small>{`Joined ${new Date(
              userData.created_at
            ).toLocaleDateString()}`}</small>
          </article>
        </div>
        <div className={styles.publicInfo}>
          <article className={styles.publicInfo_item}>
            <h3>
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                userData.public_repos
              )}
            </h3>
            <small>Repositories</small>
          </article>
          <article className={styles.publicInfo_item}>
            <h3>
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                userData.public_gists
              )}
            </h3>
            <small>Gists</small>
          </article>
          <article className={styles.publicInfo_item}>
            <h3>
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                userData.followers
              )}
            </h3>
            <small>Followers</small>
          </article>
          <article className={styles.publicInfo_item}>
            <h3>
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                userData.following
              )}
            </h3>
            <small>Following</small>
          </article>
        </div>
      </div>
    </>
  );
};

export default Userinfo;
