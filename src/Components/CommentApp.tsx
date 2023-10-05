import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentApp = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, { ...comment, replies: [] }]);
  };

  const handleReply = (replyText, parentIndex) => {
    if (parentIndex !== undefined && parentIndex >= 0 && parentIndex < comments.length) {
      const updatedComments = [...comments];
      updatedComments[parentIndex].replies.push({ author: '', text: replyText, replies: [] });
      setComments(updatedComments);
    }
  };

  const handleUpvote = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].upvotes = (updatedComments[commentIndex].upvotes || 0) + 1;
    setComments(updatedComments);
  };

  const handleDownvote = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].downvotes = (updatedComments[commentIndex].downvotes || 0) + 1;
    setComments(updatedComments);
  };

  return (
    <div className="p-4 border-4 border-double border-teal-200">
      <CommentForm onSubmit={handleCommentSubmit} />
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          text={comment.text}
          replies={comment.replies || []}
          onReply={(replyText) => handleReply(replyText, index)}
          onUpvote={() => handleUpvote(index)}
          onDownvote={() => handleDownvote(index)}
        />
      ))}
    </div>
  );
};

export default CommentApp;
