import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Contributors from './Contributors'; 
import ProgrammingLanguages from './ProgrammingLanguages';
import NavBar from './NavBar';
import './styles/IndividualProject.css';

const IndividualProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const currentUser = localStorage.getItem('user');
  console.log("Current user: ");
  console.log(currentUser);

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
  console.log(project);

  const url = project.githubRepoUrl;
  const urlArr = url.split('/');
  const reponame = urlArr.pop();
  const user = urlArr.pop();
  const input = user + '/' + reponame;
  console.log(input);

  return (
    <div className="IndividualProject">
      <NavBar />
      <div className="header">
        <h1>{project.projectTitle}</h1>
        <p>{project.description}</p>
        <div className="header-links">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="like"
          >
            Like
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="comment"
          >
            Comment
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            Github Repository
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="content-left"></div>
        <div className="content-right"></div>
      </div>
      <Contributors repoUrl={'https://github.com/nimitadesh/gt-webdev-project-platform'} />
      <ProgrammingLanguages repoName={input}/>
    </div>
  );
};

export default IndividualProject;
