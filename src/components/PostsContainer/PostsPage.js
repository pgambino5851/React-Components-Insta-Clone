//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log(props)
  return (
    <div className="posts-container-wrapper">
      {props.posts.map((post, index) => {
        return <Post post = {post} key={index}></Post>
      })}
    </div>
  );
};

export default PostsPage;

