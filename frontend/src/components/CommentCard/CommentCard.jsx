import "./CommentCard.css";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <img
        src="https://i.pravatar.cc/150"
        alt={comment.user.username}
        className="comment-avatar"
      />

      <div className="comment-content">
        <h5>{comment.user.username}</h5>

        <p>{comment.comment}</p>
      </div>
    </div>
  );
}

export default CommentCard;
