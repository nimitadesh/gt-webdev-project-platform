import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, projectTitle, description } = project;
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate(`/projects/${project._id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070"
        title="Project 1"
        projectId={_id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
