const express = require("express");
const router = express.Router();
const contributionsController = require("../controllers/contributionsController");

router.get("/:projectId", contributionsController.getProjectsByUserId);

module.exports = router;
