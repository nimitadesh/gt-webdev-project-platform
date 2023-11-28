import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { makeStyles } from '@material-ui/core/styles';
import Multiselect from 'multiselect-react-dropdown';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    // Your custom styles for the SearchBar component
    backgroundColor: 'lightgray',
    borderRadius: '8px',
    padding: '8px',
    '& input': {
      // Custom styles for the input element
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '16px',
    },
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '3vh',
    margin: '30px'
  },
}));

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State variable for search query

  const [contributors, setContributors] = useState([]);
  const [selectedContributors, setSelectedContributors] = useState([]);

  const usernames = [
    'nimitadeshpande',
    'ShaHos348'
  ];

  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:3001/projects", {
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
        setProjects(data);
        console.log("Projects inside useEffect");
        console.log(projects);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        setContributors(data);
        console.log("Contributors inside useEffect");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(contributors);
  console.log(usernames);

  const handleContributorChange = (selectedList, selectedItem) => {
    // Set the selected contributors when a change occurs
    setSelectedContributors(selectedList);
  };

  // Filter projects based on the searchQuery
  const filteredProjects = projects.filter((project) => {
    // Check if project.projectTitle and searchQuery are defined before applying toLowerCase
    return (
      ((project.projectTitle &&
        project.projectTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.description &&
          project.description.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (!selectedContributors.length || // Check if any contributors are selected
        usernames.some((currUsername) => {
          selectedContributors.includes(currUsername);
          console.log(currUsername);
          console.log(selectedContributors);
        }
          
        ))
    );
  });

  // Define a custom search bar component or element
  const customSearchBar = (
    <input
      type="text"
      placeholder="Search"
      className={classes.searchBar}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );

  return (
    <div>
      <div className={classes.searchContainer}>
      <Multiselect
          options={contributors}
          onSelect={handleContributorChange}
          onRemove={handleContributorChange}
          displayValue="username"
          closeOnSelect={false}
          placeholder="Select contributors"
        />
      {customSearchBar}
      </div>
      
      <div
        className="project-gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;