import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id, projectTitle, description, imageUrl } = project;
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate(`/projects/${project._id}`);
  };
  return (
    <Card sx={{ maxWidth: 345, flexBasis: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {imageUrl}
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
