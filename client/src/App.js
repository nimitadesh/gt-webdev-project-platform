import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Routes>
        { <Route path="/" element={<Home />} /> }
        { <Route path="/login" element={<Login />} /> }
        {<Route path="/signup" element={<Signup />} /> }
      </Routes> */}
    </div>
  );
}

export default App;