const express = require("express");
const router = express.Router();
const likesController = require("../controllers/likesController");

router.route("/").post(likesController.createNewLike);

module.exports = router;
