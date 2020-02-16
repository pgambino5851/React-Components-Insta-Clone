import React from 'react';

const CommentInput = props => {

  console.log("CommentInput props", props)
  
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        name="comment"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
