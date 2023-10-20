const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectController");

router
  .get("/", projectsController.getAllProjects)
  .get("/:projectId", projectsController.getProjectById);

module.exports = router;