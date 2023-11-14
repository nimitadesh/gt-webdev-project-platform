import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const Dashboard = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/dashboard/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="Dashboard">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <a href={user.github}>Github</a>
      </div>
    </div>
  );
};

export default Dashboard;
