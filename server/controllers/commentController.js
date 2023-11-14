const Comment = require('../models/Comments');

// Controller function to add a comment
exports.addComment = async (req, res) => {
  try {
    const { project, user, text } = req.body;

    // Perform any validation or checks needed
    if (!project || !user || !text) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new comment
    const comment = new Comment({
      project,
      user,
      text,
    });

    // Save the comment to the database
    await comment.save();

    // Respond with a success message and the created comment
    res.status(201).json({
      message: 'Comment added successfully',
      success: true,
      comment,
    });

  } catch (error) {
    console.error(error);
    // Handle any errors and respond with an error message
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

// Controller function to get comments for a specific project
exports.getCommentsForProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const comments = await Comment.find({ project: projectId }).sort({ createdAt: -1 }); // Assuming you have a createdAt field for sorting
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get comments", error: error });
  }
};
