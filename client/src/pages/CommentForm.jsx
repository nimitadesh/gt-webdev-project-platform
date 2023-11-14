import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CommentForm() {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'bottom-left',
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend API endpoint for adding comments
      const response = await axios.post(
        '/api/comments',
        {
          project: projectId, // Replace with the project ID associated with the comment
          user: userId,       // Replace with the user ID posting the comment
          text: comment,
        },
        { withCredentials: true }
      );

      // Handle the response from the backend
      if (response.data.success) {
        // Comment posted successfully
        handleSuccess(response.data.message);
        // Clear the comment input field
        setComment('');
      } else {
        // Error posting comment
        handleError(response.data.error);
      }
    } catch (error) {
      console.error('Error posting comment', error);
      handleError('Failed to post comment');
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="comment-input"
          label="Comment"
          name="comment"
          autoComplete="off"
          autoFocus
          value={comment}
          onChange={handleCommentChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit Comment
        </Button>
      </form>
    </Box>
  );
}

export default CommentForm;