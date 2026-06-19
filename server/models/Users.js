const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    stream: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "student",
    },

    // Saved Careers
    savedCareers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Career",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);