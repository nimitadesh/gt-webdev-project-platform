import React, { useEffect, useState } from "react";
import "./styles/Contributors.css";

const Contributors = ({ repoUrl }) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const repoName = getRepoNameFromUrl(repoUrl);
    getContributors(repoName)
      .then((data) => setContributors(data))
      .catch((error) => console.log(error));
  }, [repoUrl]);

  const getRepoNameFromUrl = (url) => {
    const parts = url.split("/");
    return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
  };
  console.log(contributors);

  return (
    <div className="Contributors">
      <h3>Project Contributors</h3>
      {contributors.map((contributor, index) => (
        <div key={index} className="contributor-card">
          <img src={contributor.avatar_url} alt={contributor.login} />
          <p>{contributor.login}</p>
        </div>
      ))}
    </div>
  );
};

async function getContributors(repoName) {
  let request = await fetch(
    `https://api.github.com/repos/${repoName}/contributors`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // print data from the fetch on screen
  let contributorsList = await request.json();
  return contributorsList;
}

export default Contributors;
