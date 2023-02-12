import React, { useState, useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions } from "chart.js";

interface Props {
  userName: string;
}

const Charts: React.FC<Props> = ({ userName }) => {
  const [languageData, setLanguageData] = useState<Record<
    string,
    number
  > | null>(null);
  // const [repoData, setRepoData] = useState(null);

  // const getLanguageData = () => {
  //   fetch(`https://api.github.com/users/${userName}/repos/languages`)
  //     .then((response) => response.json())
  //     .then((json) => setLanguageData(json))
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  // const getRepoData = () => {
  //   fetch(`https://api.github.com/users/${userName}/repos`)
  //     .then((response) => response.json())
  //     .then((json) => setRepoData(json))
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const getLanguageData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const repos = await response.json();

      const languageData: Record<string, number> = {};

      for (const repo of repos) {
        const languagesRes = await fetch(repo.languages_url);
        const languages = await languagesRes.json();

        for (const language in languages) {
          if (languageData[language]) {
            languageData[language] += languages[language];
          } else {
            languageData[language] = languages[language];
          }
        }
      }

      setLanguageData(languageData);
      console.log(typeof languageData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userName) {
      getLanguageData();
    }
  }, [userName]);

  return (
    <>
      <div>
        {languageData ? (
          <div>
            {/* <canvas id="firstChart" width={300} height={300} /> */}
            {/*show language data */}
            <h1>Language Data</h1>
            <ul>
              {Object.keys(languageData).map((language) => (
                <li key={language}>
                  {language}: {languageData[language]}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Charts;
