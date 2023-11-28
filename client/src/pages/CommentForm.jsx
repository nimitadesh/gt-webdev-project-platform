import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./styles/CommentForm.css";


function CommentForm({ projectId, userId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // State to store comments

  // Function to fetch comments
  const getComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/comments/${projectId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const commentsData = await response.json();
      setComments(commentsData); // Assuming the API returns an array of comments
    } catch (error) {
      console.error("Error fetching comments", error);
      toast.error("Failed to fetch comments");
    }
  };

  // Fetch comments when the component mounts or when a new comment is added
  useEffect(() => {
    getComments();
  }, [projectId]); // Only depend on projectId to refetch when the component mounts or projectId changes

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/comments", {
        project: projectId,
        user: userId,
        text: comment,
      }, { withCredentials: true });

      if (response.data.success) {
        toast.success(response.data.message);
        setComment("");
        getComments(); // Re-fetch comments after successfully adding a new one
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error posting comment", error);
      toast.error("Failed to post comment");
    }
  };

  // Function to render comments
  const renderComments = () => {
    return comments.map((comment, index) => (
      <div key={index} className="comment">
        <div className="profile-placeholder"></div>
        <p>{comment.text}</p>
      </div>
    ));
  };

  return (
    <div className="CommentForm">
      <div className="inner-content">
        <h2>Comments ({comments.length})</h2>
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
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              input: { color: "black" },
            }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit Comment
          </Button>
        </form>
        <div>{renderComments()}</div>
      </div>
    </div>
  );
}

export default CommentForm;
