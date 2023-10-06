const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getAllUsers = asyncHandler(async (req, res) => {
  // TODO: Replace with actual code
  res.send("This is a test endpoint (getAllUsers)");
});

const createNewUser = asyncHandler(async (req, res) => {
  // TODO: Replace with actual code
  res.send("This is a test endpoint (createNewUser)");
});

const updateUser = asyncHandler(async (req, res) => {
  // TODO: Replace with actual code
  res.send("This is a test endpoint (updateUser)");
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID Required" });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  const reply = "user deleted";

  res.json(reply);
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
