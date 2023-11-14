const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');

// Define routes for adding comments
router.post('/comments', CommentController.addComment);

// Export the router
module.exports = router;