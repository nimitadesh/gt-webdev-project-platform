const express = require("express");
const router = express.Router();
const contributionsController = require("../controllers/contributionsController");

router.get("/getUsers/:projectId", contributionsController.getUsersbyProjectId);
router.get("/getProjects/:userId", contributionsController.getProjectsByUserId);

module.exports = router;
