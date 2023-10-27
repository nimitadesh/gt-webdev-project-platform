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
        image="https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?w=996&t=st=1698439133~exp=1698439733~hmac=9755120cf85f4eda5752f3b7bfd3ab5d1831cb48edc10e7ae70c9213a7f383ba"
        // https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?w=996&t=st=1698439094~exp=1698439694~hmac=d19df67b4700cac4e0c015559fd7a5121a4f8ea9c4ede954993eeafa4fe2aa69
        // https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-7081.jpg?w=996&t=st=1698439108~exp=1698439708~hmac=aaeeb3c73b2f43b2f732e7d70abc53626349661138dc90f445f0f9895cb062c8
        // https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=900&t=st=1698439037~exp=1698439637~hmac=ed26774a264a6dcceb25cff1d726f962e4b14c4c3a3e75c8f4b257c38b979c11
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
