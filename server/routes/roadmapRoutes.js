const express = require("express");

const {
  getRoadmap,
} = require("../controllers/roadmapController");

const router = express.Router();

router.get("/:careerName", getRoadmap);

module.exports = router;