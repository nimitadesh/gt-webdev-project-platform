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
      <h3>Created With</h3>
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
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const languagesList = await request.json();
  console.log(languagesList);
  return Object.keys(languagesList); // Convert the object keys to an array of languages.
}

export default ProgrammingLanguages;
