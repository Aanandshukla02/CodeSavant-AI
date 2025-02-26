import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "./RightPanel.css";

function RightPanel({ isReviewing, review, copyText, copyToClipboard }) {
  return (
    <div className="right-panel">
      {isReviewing ? (
        <div className="loading">Loading...</div>
      ) : review ? (
        <>
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          <div onClick={copyToClipboard} className="copy-button">
            {copyText}
          </div>
        </>
      ) : (
        <div className="welcome-text">
          Welcome to CodeSavant-AI! Click "Review" to analyze your code.
        </div>
      )}
    </div>
  );
}

export default RightPanel;
