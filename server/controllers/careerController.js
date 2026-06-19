const Career = require("../models/Career");

// Get All Careers
const getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();

    res.status(200).json({
      success: true,
      careers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Career By ID
const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(
      req.params.id
    );

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.status(200).json({
      success: true,
      career,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllCareers,
  getCareerById,
};