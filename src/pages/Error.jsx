import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>Oops! Its a Dead End...</h2>
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
    </section>
  );
}
