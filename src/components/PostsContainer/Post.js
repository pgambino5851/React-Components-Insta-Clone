// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  console.log("Props from Post.js", props)
  const initialState = props.post.likes;
  const initialComments = props.post.comments
  const [likes, setLikes] = useState(initialState);
  const [clicked, setClicked] = useState(false);
  // const [comments, setComments] = useState(initialComments);
  
  const onClickLikes = () => {
    if(clicked === false){
      
      setLikes(likes + 1)
      setClicked(true);
      console.log("Clicked status", clicked)
    } else{
      setLikes(likes - 1);
      setClicked(false);
      
      console.log("Clicked status", clicked)
    }
  };

  const submitComment = () => {

  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes = {likes} clicked={clicked} setLikesFn = {onClickLikes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        likes = {props.post.likes}
        
      />
    </div>
  );
};

export default Post;
