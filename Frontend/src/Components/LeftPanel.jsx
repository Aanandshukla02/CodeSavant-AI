import React, { useEffect, useRef } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import "./LeftPanel.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";

function LeftPanel({
  language,
  code,
  setCode,
  isReviewing,
  reviewCode,
  handleLanguageChange,
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    prism.highlightAll();
  }, [language]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTop = editorRef.current.scrollHeight;
    }
  }, [code]);

  return (
    <div className="left-panel">
      <div className="top-bar">
        <div className="language-select-container">
          <label htmlFor="language-select">Language:</label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="javascript">JavaScript</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div
          onClick={!isReviewing ? reviewCode : undefined}
          className={`review-button ${isReviewing ? "disabled" : ""}`}
        >
          {isReviewing ? "Reviewing..." : "Review"}
        </div>
      </div>

      <div className="editor-container" ref={editorRef}>
        <Editor
          value={code}
          onValueChange={(newCode) => setCode(newCode)}
          highlight={(code) =>
            prism.highlight(
              code,
              prism.languages[language] || prism.languages.javascript,
              language
            )
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            width: "100%",
            minHeight: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default LeftPanel;
