const askGroq = require("../services/groqService");

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    // Check if message exists
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Send message to Groq
    const reply = await askGroq(message);

    // Send successful response
    res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {
    // Show full Gemini error in terminal
    console.error("❌ Gemini Error:", error);

    // Send detailed error response
    res.status(500).json({
      success: false,
      message: "AI server error",
      error: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};