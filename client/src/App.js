import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx"
import React, { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <Routes>
          {<Route path="/" element={<Home />} />}
          {<Route path="/login" element={<Login />} />}
          {<Route path="/signup" element={<Signup />} /> }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
