import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import Signup from "./pages/Signup.jsx";
import React, { useState } from "react";

const testProject = {
  _id: 1,
  projectTitle: "Project Title",
  description: "Project Description",
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <Routes>
          {/* {<Route path="/" element={<ProjectCard project={testProject} />} />} */}
          {<Route path="/" element={<Home />} />}
          {<Route path="/login" element={<Login />} />}
          {<Route path="/signup" element={<Signup />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
