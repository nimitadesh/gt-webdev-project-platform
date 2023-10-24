import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/projects', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        console.log("Projects inside useEffect");
        console.log(projects); 
      })
      .catch(error => {
        console.error(error);
      });
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