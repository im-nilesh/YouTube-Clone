import { useState } from "react";

import "./CommentItem.css";

function CommentItem({ comment, currentUser, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.comment);

  console.log("Current User:", currentUser);
  console.log("Comment User:", comment.user);

  function handleSave() {
    onUpdate(comment._id, text);
    setEditing(false);
  }

  return (
    <div className="comment-item">
      <div className="comment-header">
        <h4>{comment.user?.username || "Unknown User"}</h4>
      </div>

      {editing ? (
        <>
          <textarea
            className="comment-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="comment-actions">
            <button onClick={handleSave}>Save</button>

            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>{comment.comment}</p>

          {String(currentUser?._id) === String(comment.user?._id) && (
            <div className="comment-actions">
              <button onClick={() => setEditing(true)}>Edit</button>

              <button onClick={() => onDelete(comment._id)}>Delete</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CommentItem;
