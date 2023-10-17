import * as React from "react";
import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProjectCard
        project={{
          _id: "01",
          projectTitle: "title1",
          description: "test desc",
        }}
      />
    </div>
  );
};

export default Home;
