const User = require("../models/Users");
const Career = require("../models/Career");

// Save Career
const saveCareer = async (req, res) => {
  try {
    const { userId, careerId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await User.addSavedCareer(userId, careerId);

    res.status(200).json({
      success: true,
      message: "Career saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Saved Careers
const getSavedCareers = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const savedCareers = await Promise.all(
      (user.savedCareers || []).map(async (careerId) => {
        return Career.findById(careerId);
      })
    );

    res.status(200).json({
      success: true,
      savedCareers: savedCareers.filter(Boolean),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove Saved Career
const removeSavedCareer = async (req, res) => {
  try {
    const { userId, careerId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await User.removeSavedCareer(userId, careerId);

    res.status(200).json({
      success: true,
      message: "Career removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveCareer,
  getSavedCareers,
  removeSavedCareer,
};