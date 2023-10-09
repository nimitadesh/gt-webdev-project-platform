// import React, { useState } from "react";

// // import logo from "./logo.svg";
// // import "./App.css";

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       <h1>Register</h1>
//       <form>
//         <input
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           type="text"
//           placeholder="First Name"
//         />
//         <br />
//         <input
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           type="text"
//           placeholder="Last Name"
//         />
//         <br />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Email"
//         />
//         <br />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="Password"
//         />
//         <br />
//         <input type="submit" value="Register"></input>
//       </form>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import React, { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <Routes>
          {/* { <Route path="/" element={<Home />} /> } */}
          {<Route path="/signup" element={<SignUp />} />}
          {/* {<Route path="/signup" element={<Signup />} /> } */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;