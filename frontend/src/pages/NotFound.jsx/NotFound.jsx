import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Page not found</h2>

      <p>The page you're looking for doesn't exist.</p>

      <Link to="/" className="not-found-btn">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
