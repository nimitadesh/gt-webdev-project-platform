import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import NavBar from "./NavBar"; // Import the NavBar component
import UserTable from "./UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Users</h1>
      <ul>
        {/* {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - Roles: {user.roles.join(', ')}
          </li>
        ))} */}
        <UserTable users={users} />
      </ul>
    </div>
  );
};

export default Users;


