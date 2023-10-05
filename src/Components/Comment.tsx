import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ author, text, replies, onReply }) => {
  const [responseText, setResponseText] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (response) => {
    setResponseText([...responseText, { ...response, replies: [] }]);
  };

  const openResponse = () => {
    setIsReplying(!isReplying);
  };

  const handleUpvote = () => {
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const handleDownvote = () => {
    setCurrentCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="border p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{author}</span>
        <div className="flex items-center space-x-2">
          <button onClick={handleUpvote}>
            <span role="img" aria-label="Upvote">&#128077;</span>
          </button>
          <span>{currentCount}</span>
          <button onClick={handleDownvote}>
            <span role="img" aria-label="Downvote">&#128078;</span>
          </button>
        </div>
      </div>
      <div className="mb-2">{text}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={openResponse}
      >
        Reply
      </button>
      {isReplying && <CommentForm onSubmit={handleReply} />}
      <div className="mt-2">
        {responseText.map((reply, index) => (
          <Comment
            key={index}
            author={reply.author}
            text={reply.text}
            replies={reply.replies}
            onReply={(replyText) => onReply(replyText, index)}
          />
        ))}
      </div>
      {replies.map((reply, index) => (
        <Comment
          key={index}
          author={reply.author}
          text={reply.text}
          replies={reply.replies}
          onReply={(replyText) => onReply(replyText, index)}
        />
      ))}
    </div>
  );
};

export default Comment;
