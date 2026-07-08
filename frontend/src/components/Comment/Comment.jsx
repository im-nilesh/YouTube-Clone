//Comments File

import { useEffect, useState } from "react";

import "./Comment.css";

import CommentItem from "../CommentItem/CommentItem";

import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../../services/commentServices";

import { useAuth } from "../../context/AuthContext";

function Comments({ videoId }) {
  const { user } = useAuth();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  async function fetchComments() {
    try {
      setLoading(true);

      const data = await getComments(videoId);

      setComments(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddComment(e) {
    e.preventDefault();

    if (!comment.trim()) return;

    try {
      await addComment(videoId, comment);

      setComment("");

      await fetchComments();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add comment");
    }
  }

  async function handleUpdate(id, updatedComment) {
    try {
      await updateComment(id, updatedComment);

      await fetchComments();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this comment?")) return;

    try {
      await deleteComment(id);

      await fetchComments();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete");
    }
  }

  if (loading) {
    return <h3>Loading Comments...</h3>;
  }

  return (
    <section className="comments">
      <h3>{comments.length} Comments</h3>

      {user && (
        <form className="comment-form" onSubmit={handleAddComment}>
          <textarea
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button type="submit">Comment</button>
        </form>
      )}

      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            currentUser={user}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <div className="empty-state">
          <h3>No comments yet</h3>
          <p>Be the first to comment.</p>
        </div>
      )}
    </section>
  );
}

export default Comments;
