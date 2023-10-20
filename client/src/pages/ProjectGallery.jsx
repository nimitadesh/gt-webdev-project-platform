import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with your actual API endpoint for fetching projects.
    fetch('http://localhost:3001/projects', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // console.log(response.json);
        response.json()})
      .then(data => {
        // console.log(data);
        setProjects(data)
        console.log("Projects")
        console.log(projects)
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="project-gallery">
      {projects ? (
  projects.map(project => (
    <ProjectCard key={project._id} project={project} />
  ))
) : (
  <p>Loading...</p>
)}

    </div>
  );
}

export default ProjectGallery;