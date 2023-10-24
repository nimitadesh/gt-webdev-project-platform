import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <h1>{project.projectTitle}</h1>
      <p>{project.description}</p> 
      <a href="https://github.com/nimitadesh/gt-webdev-project-platform" target="blank" rel="noopener noreferrer">
        Github Repository
      </a>
    </div>
  );
};

export default IndividualProject;
