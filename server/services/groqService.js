const Groq = require("groq-sdk");

const groq = process.env.GROQ_API_KEY
  ? new Groq({
      apiKey: process.env.GROQ_API_KEY,
    })
  : null;

const askGroq = async (message) => {
  if (!groq) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are Career Compass AI, a helpful career guidance assistant. Help students choose careers, degrees, and learning paths.",
        },
        {
          role: "user",
          content: message,
        },
      ],

      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1000,
    });

    return chatCompletion.choices[0].message.content;

  } catch (error) {
    console.error("❌ Groq Error:", error);
    throw error;
  }
};

module.exports = askGroq;