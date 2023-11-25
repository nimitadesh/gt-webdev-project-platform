const Comment = require('../models/Comments');

// Controller function to add a comment
exports.addComment = async (req, res, next) => {
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

    // Call the next middleware if needed
    next();
  } catch (error) {
    console.error(error);

    // Handle any errors and respond with an error message
    res.status(500).json({ error: 'Failed to add comment' });
  }
};