const express = require("express");

const {
  chatWithAI,
} = require("../controllers/aiController");

const router = express.Router();

// POST /api/ai/chat
router.post("/chat", chatWithAI);

module.exports = router;