const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser);

router
  .route("/:id")
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

router
  .route("/username/:username")
  .get(usersController.getUserDetailsbyUsername);
// router
//   .route("/")
//   .get(usersController.getAllUsers)
//   .post(usersController.createNewUser)
//   .patch(usersController.updateUser)
//   .delete(usersController.deleteUser);

// router.get("/username/:username", usersController.getUserDetailsbyUsername);

module.exports = router;
