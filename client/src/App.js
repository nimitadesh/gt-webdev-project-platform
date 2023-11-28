import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import ProjectCard from "./pages/ProjectCard.jsx";
import Signup from "./pages/Signup.jsx";
import IndividualProject from "./pages/IndividualProject";
import Dashboard from "./pages/Dashboard.jsx";
import React, { useState } from "react";
import Projects from "./pages/Projects.jsx";
import Users from "./pages/Users.jsx";
import UserTable from "./pages/UserTable.jsx";

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
          {<Route path="/dashboard/:username" element={<Dashboard />} />}
          {
            <Route
              path="/projects/:projectId"
              element={<IndividualProject />}
            />
          }
          <Route path="/projects" element={<Projects />} />
          <Route path="/users" element={<Users />} /> 
          <Route path="/userTable" element={<UserTable users={Users} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
