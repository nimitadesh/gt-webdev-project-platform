const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getAllUsers = asyncHandler(async (req, res) => {

  const users = await User.find().select('-password').lean()
  if (!users) {
    return res.status(400).json({ message: 'No users found'})
  }
  res.json(users)
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
  
  const { id } = req.body
  if (!id) {
    return res.status(400).json({ message: 'User ID Required'})
  } 

  const notes = await Note.findOne({ user: id}).lean().exec()
  if (nodes?.length) {
    return res.status(400).json({ message: 'User has assigned notes'})
  }

  const user = await User.findbyId(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found'})
  }

  const result = await user.deleteOne()

  const reply =  `Username ${result.username} with ID ${result._id} deleted`

  res.json(reply)
  res.send("This is a test endpoint (deleteUser)");

});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
