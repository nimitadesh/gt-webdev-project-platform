import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contributors from "./Contributors";
import ProgrammingLanguages from "./ProgrammingLanguages";
import NavBar from "./NavBar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./styles/IndividualProject.css";

const IndividualProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const currentUser = localStorage.getItem('user');
  console.log("Current user: ");
  console.log(currentUser);

  useEffect(() => {
    fetch(`http://localhost:3001/projects/${projectId}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  console.log("Project: ");
  console.log(project);

  const url = project.githubRepoUrl;
  const urlArr = url.split("/");
  const reponame = urlArr.pop();
  const user = urlArr.pop();
  const input = user + "/" + reponame;
  console.log(input);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const handleLike = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/like",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      project: "",
      user: "",
      createdAt: "",
    });
  };

  return (
    <div className="IndividualProject">
      <NavBar />
      <div className="header">
        <h1>{project.projectTitle}</h1>
        <p>{project.description}</p>
        <div className="header-links">
          <Stack spacing={2} direction="row" onClick={handleLike}>
            <ColorButton variant="contained">
              Custom CSS
              <FavoriteBorderIcon />
            </ColorButton>
          </Stack>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="comment"
          >
            Comment
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            Github Repository
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="content-left"></div>
        <div className="content-right"></div>
      </div>
      <Contributors
        repoUrl={"https://github.com/nimitadesh/gt-webdev-project-platform"}
      />
      <ProgrammingLanguages repoName={input} />
    </div>
  );
};

export default IndividualProject;
