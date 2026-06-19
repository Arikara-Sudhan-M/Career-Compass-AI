const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  careerName: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  salaryRange: String,
  futureDemand: String,

  requiredDegree: [String],

  skills: [String],

  streamEligibility: [String],

  description: String,

  growthRate: Number,

  topRecruiters: [String],

  workEnvironment: String,

  // Career Roadmap
  roadmap: [String],

  // Learning Resources
  learningResources: [String],

  // Certifications
  certifications: [String],
});

module.exports = mongoose.model("Career", careerSchema);