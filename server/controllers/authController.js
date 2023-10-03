const User = require("../models/User");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { firstName, lastName, password, roles, github, username } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({
      firstName,
      lastName,
      password,
      roles,
      github,
      username,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
