import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import { useAuth0 } from "@auth0/auth0-react";

// ------------------ Utility Functions ------------------
const getDefaultCodeForLanguage = (lang) => {
  switch (lang) {
    case "javascript":
      return `function greetUser(userName) {
  return "Welcome, " + userName + "!";
}`;
    case "c":
      return `#include <stdio.h>
int main() {
    printf("Hello, world!\\n");
    return 0;
}`;
    case "cpp":
      return `#include <iostream>
using namespace std;
int main() {
    cout << "Hello, world!";
    return 0;
}`;
    case "java":
      return `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}`;
    default:
      return "";
  }
};

function isLikelyCode(input) {
  const codeTokens = [
    "function",
    "{",
    "}",
    ";",
    "#include",
    "public class",
    "int main",
    "printf",
    "console.log",
    "=>",
  ];
  return codeTokens.some((token) => input.includes(token));
}

// ------------------ Main Component ------------------
function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(getDefaultCodeForLanguage("javascript"));
  const [review, setReview] = useState("");
  const [copyText, setCopyText] = useState("Copy");
  const [isReviewing, setIsReviewing] = useState(false);

  // 🔑 Auto login when not authenticated
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect({
        prompt: "select_account", // force user to choose Google account
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  // ------------------ Review Function ------------------
  async function reviewCode() {
    setIsReviewing(true);
    setReview("");
    if (!isLikelyCode(code)) {
      setReview(
        "Sorry, but this application is intended exclusively for code review purposes, " +
          "as designed by my developer Anand Shukla. Please provide valid code for analysis."
      );
      setIsReviewing(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
        language,
      });
      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review. Please try again.");
    }
    setIsReviewing(false);
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(review)
      .then(() => {
        setCopyText("Copied!");
        setTimeout(() => setCopyText("Copy"), 2000);
      })
      .catch(() => {
        setCopyText("Failed to Copy");
        setTimeout(() => setCopyText("Copy"), 2000);
      });
  }

  function handleLanguageChange(e) {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setCode(getDefaultCodeForLanguage(selectedLang));
  }

  // ------------------ Render ------------------
  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!isAuthenticated) {
    return null; // jab tak login nahi hota kuch mat dikhao
  }

  return (
    <>
      <Header /> {/* ✅ User info aur logout ab yahan handle hoga */}

      <main>
        <LeftPanel
          language={language}
          code={code}
          setCode={setCode}
          isReviewing={isReviewing}
          reviewCode={reviewCode}
          handleLanguageChange={handleLanguageChange}
        />

        <RightPanel
          isReviewing={isReviewing}
          review={review}
          copyText={copyText}
          copyToClipboard={copyToClipboard}
        />
      </main>
    </>
  );
}

export default App;
