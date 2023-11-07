
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const IndividualProject = () => {
//   const { projectId } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:3001/projects/${projectId}`)
//       .then((response) => response.json())
//       .then((data) => setProject(data))
//       .catch((error) => console.log(error));
//   }, [projectId]);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   console.log("Project: ");
//   console.log(project)

//   return (
//     <div>
//       <h1>{project.projectTitle}</h1>
//       <p>{project.description}</p> 
//       <a href="https://github.com/nimitadesh/gt-webdev-project-platform" target="blank" rel="noopener noreferrer">
//         Github Repository
//       </a>
//     </div>
//   );
// };

// async function getContributors(repoName, page = 1) {  
//   let request = await fetch(`https://api.github.com/repos/${repoName}/contributors?per_page=100&page=${page}`, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   });

//   // print data from the fetch on screen
//   let contributorsList = await request.json();
//   return contributorsList;
// };


// async function getAllContributors(repoName) {
//   let contributors = [];
//   let page = 1;
//   do {
//       list = await getContributors(repoName, page);
//       contributors = contributors.concat(list);
//       page++;
//   } while (list.length > 0);
//   // while (list.length%100 !== 0)
//   return contributors;
// }


// export default IndividualProject;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Contributors from './Contributors'; 
import NavBar from "./NavBar";
import ProgrammingLanguages from "./ProgrammingLanguages";
import NavBar from "./NavBar";
import "./styles/IndividualProject.css";

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
  console.log(project);

  const url = "https://github.com/nimitadesh/gt-webdev-project-platform";
  const urlArr = url.split("/");
  const reponame = urlArr.pop();
  const user = urlArr.pop();
  const input = user + "/" + reponame;
  console.log(input);

  return (
    <div className="IndividualProject">
      <NavBar />
      <div className="header">
        <h1>{project.projectTitle}</h1>
        <p>{project.description}</p>
        <div className="header-links">
          <a
            href={"#"}
            target="blank"
            rel="noopener noreferrer"
            className="like"
          >
            Like
          </a>
          <a
            href={"#"}
            target="blank"
            rel="noopener noreferrer"
            className="comment"
          >
            Comment
          </a>
          <a
            href={url}
            target="blank"
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
//         <ProgrammingLanguages repoName={input} />
      </div>
  </div>

    <div>
      <NavBar />
      <h1>{project.projectTitle}</h1>
      <p>{project.description}</p>
      <a
        href={project.githubUrl} 
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Repository
      </a>
      <Contributors repoUrl={'https://github.com/nimitadesh/gt-webdev-project-platform'} />
      <ProgrammingLanguages repoName={input}/>
    </div>
  );
};

export default IndividualProject;
