import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const text = "Developed by aaanandd";

  useEffect(() => {
    let timer;
    if (!isErasing && index < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 150);
    } else if (isErasing && index > 0) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 100);
    } else if (index === text.length && !isErasing) {
      timer = setTimeout(() => {
        setIsErasing(true);
      }, 1000);
    } else if (index === 0 && isErasing) {
      setIsErasing(false);
    }

    return () => clearTimeout(timer);
  }, [index, isErasing, text]);

  return (
    <header className="app-header">
      <h1 className="header-title">CodeSavant-AI</h1>
      <span className="developer">{displayText}</span>
    </header>
  );
}

export default Header;
