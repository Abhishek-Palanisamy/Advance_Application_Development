// NotFound.js
import React from "react";
import '../../assets/css/Styles.css'
const PageError = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>Please go back to the <a href="/">login</a> and try again.</p>
    </div>
  );
};

export default PageError;
