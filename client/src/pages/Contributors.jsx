import React, { useEffect, useState } from 'react';

const Contributors = ({ repoUrl }) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const repoName = getRepoNameFromUrl(repoUrl);
    getContributors(repoName)
      .then((data) => setContributors(data))
      .catch((error) => console.log(error));
  }, [repoUrl]);

  const getRepoNameFromUrl = (url) => {
    const parts = url.split('/');
    return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
  };

  return (
    <div>
      <h2>Contributors</h2>
      <ul>
        {contributors.map((contributor, index) => (
          <li key={index}>{contributor.login}</li>
        ))}
      </ul>
    </div>
  );
};

async function getContributors(repoName) {  
  let request = await fetch(`https://api.github.com/repos/${repoName}/contributors`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  });

  // print data from the fetch on screen
  let contributorsList = await request.json();
  return contributorsList;
};

export default Contributors;
