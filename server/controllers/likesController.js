const Like = require("../models/Like");
const asyncHandler = require("express-async-handler");

const createNewLike = asyncHandler(async (req, res) => {
  const { project, user, createdAt } = req.body;
  const newLike = new Like({ project, user, createdAt });
  const savedLike = await newLike.save();
  res.status(201).json(savedLike);
});

module.exports = {
  createNewLike,
};
