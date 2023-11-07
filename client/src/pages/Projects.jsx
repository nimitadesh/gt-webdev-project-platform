import React from "react";
import NavBar from "./NavBar"; // Import the NavBar component
import ProjectGallery from "./ProjectGallery";

const Projects = () => {
  return (
    <div>
      <NavBar /> {/* Include the navigation bar */}
      <h1>Projects</h1>
      <ProjectGallery />
      {/* Other content for the Projects page */}
    </div>
  );
};

export default Projects;