const Contribution = require("../models/Contribution");
const asyncHandler = require("express-async-handler");

const getProjectsByUserId = asyncHandler(async (req, res) => {
  try {
    const projectId = req.params.project_id;
    const users = await Contribution.find({ project_id: projectId });

    if (!users) {
      return res.status(404).json({ message: "Contributers not found" });
    }

    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  getProjectsByUserId,
};
