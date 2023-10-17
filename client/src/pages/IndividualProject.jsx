import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IndividualProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.projectTitle}</h1>
      <p>{project.description}</p>
      <a href={project.githubRepoUrl} target="blank" rel="noopener noreferrer">
        Github Repository
      </a>
    </div>
  );
};

export default IndividualProject;
