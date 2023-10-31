import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import SearchBar from 'material-ui-search-bar';

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State variable for search query

  useEffect(() => {
    fetch("http://localhost:3001/projects", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        console.log("Projects inside useEffect");
        console.log(projects);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter projects based on the searchQuery
  const filteredProjects = projects.filter(project => {
    // Check if project.title and searchQuery are defined before applying toLowerCase
    return (
      project.projectTitle && searchQuery &&
      project.projectTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  

  return (
    <div className="project-gallery">
      {/* Add the Material-UI SearchBar */}
      <SearchBar
        value={searchQuery}
        onChange={newValue => setSearchQuery(newValue)}
        onRequestSearch={() => console.log(searchQuery)}
      />

      {filteredProjects.length > 0 ? (
        filteredProjects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))
      ) : (
        <p>No projects found.</p>

      )}
    </div>
  );
};

export default ProjectGallery;
