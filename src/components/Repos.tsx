import { type } from "os";
import React, { useState } from "react";
import styles from "../styles/Repos.module.css";

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
            <article key={repo.id} className={styles.repoCard}>
              <div className={styles.repoHeader}>
                <h3>{repo.name}</h3>
                <div className={styles.repoInfo}>
                  <span>{repo.language}</span>
                  <span>{repo.size} KB</span>
                </div>
              </div>
              <p>{repo.description}</p>
              <div className={styles.repoFooter}>
                <div className={styles.repoStats}>
                  <span>{repo.open_issues} Open Issues</span>
                  <span>{repo.forks} Forks</span>
                  <span>{repo.watchers} Watchers</span>
                </div>
                <div className={styles.repoLinks}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      View Live
                    </a>
                  )}
                </div>
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
          className={styles.sort__option}
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
      <div className={styles.repos__header}>
        <h1>Repositories</h1>
        <div className={styles.sort}>
          <div className={styles.sort__selected} onClick={toggleDropdown}>
            {selectedRepo}
          </div>
          {dropDown && (
            <ul className={styles.sort__options}>{renderSortOptions()}</ul>
          )}
        </div>
      </div>
      <div className={styles.repos__list}>{renderRepos()}</div>
    </div>
  );
};

export default Repos;
