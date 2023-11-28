const Contribution = require("../models/Contribution");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

//6526d1d3ec31e99d36bb50fc
const getUsersbyProjectId = asyncHandler(async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const users = await Contribution.find({
      project_id: new ObjectId(projectId),
    });

    if (!users) {
      return res.status(404).json({ message: "Contributers not found" });
    }

    const usersAsJson = users.map((item) => ({ user_id: item.user_id }));
    const result = await Promise.all(
      usersAsJson.map(async (userJson) => {
        const user = await User.findOne({
          _id: userJson.user_id,
        });
        return { ...userJson, username: user.username };
      })
    );

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server error" + error });
  }
});
// 65260c42f6df3a949de673b3
const getProjectsByUserId = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;
    const projects = await Contribution.find({
      user_id: new ObjectId(userId),
    });

    if (!projects) {
      return res.status(404).json({ message: "Projects not found" });
    }
    const result = projects.map((item) => ({ project_id: item.project_id }));
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Server error" + error });
  }
});

module.exports = {
  getUsersbyProjectId,
  getProjectsByUserId,
};
