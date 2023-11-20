import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProgrammingLanguages = ({ repoName }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const languagesList = await getLanguages(repoName);
      setLanguages(languagesList);
    }

    fetchData();
  }, [repoName]);

  return (
    <div>
      <h1>Programming Languages:</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

async function getLanguages(repoName) {
  const request = await fetch(
    `https://api.github.com/repos/${repoName}/languages`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const languagesList = await request.json();
  console.log(languagesList);
  return Object.keys(languagesList); // Convert the object keys to an array of languages.
}

async function getAllLanguages(repoName) {
  let languages = [];
  let page = 1;
  do {
      var list = await getLanguages(repoName);
      languages = languages.concat(list);
      page++;
  } while (list.length > 0);
  // while (list.length%100 !== 0)
  return languages;
}

export default ProgrammingLanguages;