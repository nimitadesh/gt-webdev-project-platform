const express = require("express");
const router = express.Router();
const likesController = require("../controllers/likesController");

router.get("/getLikes/:projectId", likesController.getLikesbyProject);

module.exports = router;
