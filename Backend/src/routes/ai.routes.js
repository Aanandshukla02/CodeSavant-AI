const express = require("express");
const aiService = require("../services/ai.service");

const router = express.Router();

// POST /ai/get-review
router.post("/get-review", async (req, res) => {
  try {
    const { code } = req.body;

    // Validation (earlier validateRequest.js ka kaam)
    if (!code || typeof code !== "string") {
      return res.status(400).json({ error: "Valid 'code' is required in request body." });
    }

    // Call AI service (earlier ai.controller.js ka kaam)
    const review = await aiService(code);
    res.json({ review });
  } catch (error) {
    console.error("AI Review Error:", error);
    res.status(500).json({ error: "Something went wrong while reviewing code." });
  }
});

module.exports = router;
