const Project = require("../models/Project");
const asyncHandler = require("express-async-handler");

const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error();
    res.status(500).json({ message: 'Server error'});
  }
});

const getProjectById = asyncHandler(async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found'});
        }

        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: 'Server error'});
    }
  });

  const getLanguages = asyncHandler(async (req, res) => {
    try {
      const result = await Project.aggregate([
        { $unwind: "$languages" }, 
        { $group: { _id: "$languages" } },
        { $group: { _id: null, languages: { $push: "$_id" } } }, 
        { $project: { _id: 0, languages: 1 } } 
      ]);

      const languages = result.length > 0 ? result[0].languages : [];
  
      res.json(languages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });  

module.exports = {
  getAllProjects,
  getProjectById,
  getLanguages,
};
