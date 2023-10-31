import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProgrammingLanguages from "./ProgrammingLanguages";

const IndividualProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  console.log("Project: ");
  console.log(project)

  const url = 'https://github.com/nimitadesh/gt-webdev-project-platform';
  const urlArr = url.split('/');
  const reponame = urlArr.pop();
  const user = urlArr.pop();
  const input = user + "/" + reponame;
  console.log(input);

  return (
    <div>
      <h1>{project.projectTitle}</h1>
      <p>{project.description}</p> 
      <a href={url} target="blank" rel="noopener noreferrer">
        Github Repository
      </a>
      <ProgrammingLanguages  repoName={input}/>
    </div>
  );
};

export default IndividualProject;
