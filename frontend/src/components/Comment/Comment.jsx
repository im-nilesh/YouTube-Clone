import { useEffect, useState } from "react";

import "./Comment.css";

import CommentCard from "../CommentCard/CommentCard";

import { getComments } from "../../services/commentServices";

function Comments({ videoId }) {
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const data = await getComments(videoId);

        setComments(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [videoId]);

  if (loading) {
    return <h3>Loading Comments...</h3>;
  }

  return (
    <section className="comments">
      <h3>{comments.length} Comments</h3>

      {comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </section>
  );
}

export default Comments;
