const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables First
dotenv.config();

// Database Connection
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const careerRoutes = require("./routes/careerRoutes");
const userRoutes = require("./routes/userRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Connect MongoDB Database
connectDB();

// Initialize Express App
const app = express();


// ==========================
// Middleware
// ==========================

// CORS
app.use(cors());

// JSON Parser
app.use(express.json());


// ==========================
// API Routes
// ==========================

app.use("/api/auth", authRoutes);

app.use("/api/careers", careerRoutes);

app.use("/api/users", userRoutes);

app.use("/api/roadmaps", roadmapRoutes);

app.use("/api/ai", aiRoutes);


// ==========================
// Home Route / Health Check
// ==========================

app.get("/", (req, res) => {

  res.status(200).send(
    "🚀 Career Compass AI Backend Running Successfully"
  );

});


// ==========================
// 404 Route Handler
// ==========================

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: "API Route Not Found ❌"

  });

});


// ==========================
// Global Error Handler
// ==========================

app.use((err, req, res, next) => {

  console.error("Server Error:", err.stack);

  res.status(500).json({

    success: false,

    message: "Something went wrong on the server ❌"

  });

});


// ==========================
// Server Port
// ==========================

const PORT = process.env.PORT || 5000;


// ==========================
// Start Server
// ==========================

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});