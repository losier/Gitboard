import { type } from "os";
import React, { useState } from "react";
import styles from "../styles/Repos.module.css";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsGlobe, BsGithub, BsFillStarFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import Link from "next/link";

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string;
  size: number;
  language: string;
  forks: number;
  watchers: number;
  license: {
    name: string;
    url: string;
  };
  fork: boolean;
  homepage: string;
}

interface Props {
  repoData: RepoData[];
}

const Repos: React.FC<Props> = ({ repoData }) => {
  const [selectedRepo, setSelectedRepo] = useState<string>("stars");
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = () => setDropDown(!dropDown);
  const sortTypes = ["stars", "forks", "size"];

  const sortRepos = (sortType: string) => {
    const sortedRepos = [...repoData].sort((a, b) => {
      if (sortType === "stars") {
        return b.watchers - a.watchers;
      }
      if (sortType === "forks") {
        return b.forks - a.forks;
      }
      if (sortType === "size") {
        return b.size - a.size;
      }
      return 0;
    });
    return sortedRepos;
  };

  const renderRepos = () => {
    const sortedRepos = sortRepos(selectedRepo);
    return sortedRepos.map((repo) => {
      return (
        <>
          {repo.fork ? null : (
            <article key={repo.id} className={styles.repo_card}>
              <div className={styles.card_header}>
                <div className={styles.card_title}>
                  <span>
                    <RiGitRepositoryLine />
                  </span>
                  <h1>{repo.name}</h1>
                </div>
                <span>
                  <Link
                    className={styles.title_link}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </Link>
                  {repo.homepage && (
                    <Link
                      className={styles.title_link}
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGlobe />
                    </Link>
                  )}
                </span>
              </div>
              <p className={styles.card_desc}>
                {repo.description ? repo.description : "No description"}
              </p>
              <div className={styles.card_details}>
                {repo.language ? repo.language : "N/A"}
                <span>
                  <BiGitRepoForked /> {repo.forks}
                </span>
                <span>
                  <BsFillStarFill /> {repo.watchers}
                </span>
                <span>{repo.size} KB</span>
              </div>

              <div className={styles.card_footer}>
                <span>
                  {repo.license ? (
                    <Link
                      className={styles.title_link}
                      href={`${repo.license.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repo.license.name}
                    </Link>
                  ) : (
                    "No License"
                  )}
                </span>
              </div>
            </article>
          )}
        </>
      );
    });
  };

  const renderSortOptions = () => {
    return sortTypes.map((sortType) => {
      return (
        <li
          key={sortType}
          className={styles.sort_option}
          onClick={() => {
            setSelectedRepo(sortType);
            toggleDropdown();
          }}
        >
          {sortType}
        </li>
      );
    });
  };

  return (
    <div className={styles.repos}>
      <div className={styles.repos_header}>
        <h1>Repositories</h1>
        <div className={styles.sort}>
          <div className={styles.sort_selected} onClick={toggleDropdown}>
            {selectedRepo}
          </div>
          {dropDown && (
            <ul className={styles.sort_options}>{renderSortOptions()}</ul>
          )}
        </div>
      </div>
      <div className={styles.repos_list}>{renderRepos()}</div>
    </div>
  );
};

export default Repos;
