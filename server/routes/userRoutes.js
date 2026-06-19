const express = require("express");

const {
  saveCareer,
  getSavedCareers,
  removeSavedCareer,
} = require("../controllers/userController");

const router = express.Router();

// Save Career
router.post("/save-career", saveCareer);

// Get Saved Careers
router.get(
  "/saved-careers/:userId",
  getSavedCareers
);

// Remove Saved Career
router.delete(
  "/remove-career/:userId/:careerId",
  removeSavedCareer
);

module.exports = router;