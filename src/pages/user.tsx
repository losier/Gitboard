import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Heads, Loading, Userinfo, Errors, Charts, Repos } from "../components";
import styles from "../styles/User.module.css";

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string;
  size: number;
  language: string;
  open_issues: number;
  forks: number;
  watchers: number;
  license: {
    name: string;
    url: string;
  };
  fork: boolean;
  created_at: string;
  homepage: string;
}

const User: React.FC = () => {
  const router = useRouter();
  const username = router.query["username"];

  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });
  const [loading, setLoading] = useState(true);

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then((json) => setUserData(json))
      .catch((error) => {
        setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then((json) => setRepoData(json))
      .catch((error) => {
        setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (username) {
      getUserData();
      getRepoData();
      setLoading(false);
    }
  }, [username]);

  return (
    <div className={styles.userContainer}>
      <Heads title="User" />
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && error.active ? (
            <Errors error={error} />
          ) : (
            <main>
              {userData && <Userinfo userData={userData} />}
              {repoData && <Repos repoData={repoData} />}
            </main>
          )}
        </>
      )}
    </div>
  );
};

export default User;
