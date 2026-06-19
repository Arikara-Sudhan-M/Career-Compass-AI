const Roadmap = require("../models/Roadmap");

const getRoadmap = async (req, res) => {
  try {
    const { careerName } = req.params;

    const roadmap = await Roadmap.findOne({
      careerName,
    });

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      roadmap,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRoadmap,
};