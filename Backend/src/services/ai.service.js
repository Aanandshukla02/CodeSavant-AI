const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");

// Gemini model setup
const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

// Prompt Template
const reviewPrompt = ChatPromptTemplate.fromMessages([
  ["system", `
    You are a Senior Software Engineer (10+ Years Experience).
    Review the code carefully.

    Tasks:
    1. Detect mistakes (syntax, undefined vars, logical/performance issues).
    2. Suggest improvements (best practices, readability, optimization).
    3. Always provide the final corrected code ONLY inside one code block.
       ❌ Do NOT write any extra heading like "Corrected Code", 
       "Improved Code", "Fixed Code", etc. outside the code block.
    4. Format response as:
       - **Mistakes/Issues**
       - **Improvements**
       - Then directly the corrected code block (no extra heading).
  `],
  ["human", "{code}"]
]);

async function generateReview(code) {
  const chain = reviewPrompt.pipe(model);
  const response = await chain.invoke({ code });
  let content = response.content;

  // 🧹 Cleanup: remove unwanted "Corrected Code" headings outside code blocks
  content = content.replace(/(\*\*Corrected Code\*\*:?)/gi, "").trim();
  content = content.replace(/(\*\*Improved Code\*\*:?)/gi, "").trim();

  return content;
}

module.exports = generateReview;
