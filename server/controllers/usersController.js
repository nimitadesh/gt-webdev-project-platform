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
  // TODO: Replace with actual code
  res.send("This is a test endpoint (deleteUser)");
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
