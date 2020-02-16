// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log("Props from comment section:", props)
  // Add state for the comments
  const initialState = props.comments;
  const [comments, setComments] = useState(initialState);
  const [comment, setComment] = useState("");

  const submitComment = e =>  {
    e.preventDefault()
    console.log("e from submitComment", e)
    console.log("submitComment ran")
    console.log("A comment was submitted", {
      username: "pgambino",
      text: e.target.value
    })
    // setComments(...comments, {
    //   username: "pgambino",
    //   text: e.target.value
    // })
    console.log("Comments from submitComment", comments)
  }

  const changeComment = e => {
    console.log("e from changeComment", e)
    setComment(e.target.value);
    console.log("Comment from changeComment", comment);
  }
  return (
    <div >
      {comments.map((comment, index) => {
       return <Comment  key ={index} comment={comment}></Comment>
      })}
      <CommentInput changeComment = {changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
