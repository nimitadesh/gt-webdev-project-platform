const express = require('express');
const router = express.Router();
const CommentController = require("../controllers/commentController");

// Define routes for adding comments
router.post("/", CommentController.addComment);
router.get('/:projectId', CommentController.getCommentsForProject);

// Export the router
module.exports = router;

