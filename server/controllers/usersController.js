const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, firstName, lastName, github } = req.body;
  const newUser = new User({ username, password, firstName, lastName, github });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const user = await User.findByIdAndUpdate(id, update, { new: true });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ message: "User deleted" });
});

const getUserDetailsbyUsername = asyncHandler(async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username }, 'firstName lastName github');
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserDetailsbyUsername,
};
// const getAllUsers = asyncHandler(async (req, res) => {
//   // TODO: Replace with actual code
//   res.send("This is a test endpoint (getAllUsers)");
// });

// const createNewUser = asyncHandler(async (req, res) => {
//   // TODO: Replace with actual code
//   res.send("This is a test endpoint (createNewUser)");
// });

// const updateUser = asyncHandler(async (req, res) => {
//   // TODO: Replace with actual code
//   res.send("This is a test endpoint (updateUser)");
// });

// const deleteUser = asyncHandler(async (req, res) => {
//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({ message: "User ID Required" });
//   }

//   const user = await User.findById(id).exec();

//   if (!user) {
//     return res.status(400).json({ message: "User not found" });
//   }

//   const result = await user.deleteOne();

//   const reply = "user deleted";

//   res.json(reply);
// });

// module.exports = {
//   getAllUsers,
//   createNewUser,
//   updateUser,
//   deleteUser,
// };
