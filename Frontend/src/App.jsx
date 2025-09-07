import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";
import { useAuth0 } from "@auth0/auth0-react";

const getDefaultCodeForLanguage = (lang) => {
  switch (lang) {
    case "javascript":
      return `function greetUser(userName) {\n  return "Welcome, " + userName + "!";\n}`;
    case "c":
      return `#include <stdio.h>\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n}`;
    case "cpp":
      return `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, world!";\n    return 0;\n}`;
    case "java":
      return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}`;
    default:
      return "";
  }
};

function isLikelyCode(input) {
  const codeTokens = ["function", "{", "}", ";", "#include", "public class", "int main", "printf", "console.log", "=>"];
  return codeTokens.some((token) => input.includes(token));
}

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(getDefaultCodeForLanguage("javascript"));
  const [review, setReview] = useState("");
  const [isReviewing, setIsReviewing] = useState(false);

  // Auto login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect({ prompt: "select_account" });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  // ------------------ Review Function ------------------
  async function reviewCode() {
    if (!isLikelyCode(code)) {
      setReview("⚠️ Please provide valid code for analysis.");
      return;
    }

    setIsReviewing(true);
    setReview("");

    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code, language });
      setReview(response.data.review);
    } catch (error) {
      setReview("❌ Error fetching review. Try again.");
    }

    setIsReviewing(false);
  }

  function handleLanguageChange(e) {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    const defaultCode = getDefaultCodeForLanguage(selectedLang);
    setCode(defaultCode);
    setReview(""); // Clear previous review on language change
  }

  function applyCorrectedCode(corrected) {
    setCode(corrected);
    setReview(""); // Reset review so user can recheck
  }

  if (isLoading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (!isAuthenticated) return null;

  return (
    <>
      <Header />

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
          applyCorrectedCode={applyCorrectedCode}
        />
      </main>
    </>
  );
}

export default App;
