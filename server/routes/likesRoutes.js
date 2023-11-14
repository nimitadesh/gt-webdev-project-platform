const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/likesController");

router.get("/", likesController.createNewLike);

module.exports = router;
