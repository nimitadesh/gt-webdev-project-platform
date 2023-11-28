const Like = require("../models/Like");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

//6526d1d3ec31e99d36bb50fc
const getLikesbyProject = asyncHandler(async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const likes = await Like.find({
      project: new ObjectId(projectId),
    });

    if (!likes) {
      return res.status(404).json({ message: "Likes not found" });
    }

    res.json(Object.keys(likes).length);
  } catch (error) {
    return res.status(500).json({ message: "Server error" + error });
  }
});

const createNewLike = asyncHandler(async (req, res) => {
  const { project, user, createdAt } = req.body;
  const newLike = new Like({ project, user, createdAt });
  const savedLike = await newLike.save();
  res.status(201).json(savedLike);
});

module.exports = {
  getLikesbyProject,
  createNewLike,
};
