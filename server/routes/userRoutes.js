const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router
  .get("/", usersController.getAllUsers)
  .get("/:id", usersController.getUsernamebyUserId)
  .post("/:create", usersController.createNewUser)
  .patch("/:update", usersController.updateUser)
  .delete("/:id", usersController.deleteUser);
  

module.exports = router;
