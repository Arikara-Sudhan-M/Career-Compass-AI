const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    careerName: {
      type: String,
      required: true,
      unique: true,
    },

    steps: [
      {
        type: String,
      },
    ],

    skills: [
      {
        type: String,
      },
    ],

    resources: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Roadmap",
  roadmapSchema
);