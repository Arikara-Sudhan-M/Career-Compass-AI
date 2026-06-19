const express = require("express");

const {
  getAllCareers,
  getCareerById,
} = require("../controllers/careerController");

const router = express.Router();

// Get all careers
router.get("/", getAllCareers);

// Get single career by ID
router.get("/:id", getCareerById);

module.exports = router;