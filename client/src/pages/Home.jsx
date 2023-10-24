import * as React from "react";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* <ProjectCard
        project={{
          _id: "01",
          projectTitle: "title1",
          description: "test desc",
        }}
      /> */}
      <ProjectGallery />
    </div>
  );
};

export default Home;
