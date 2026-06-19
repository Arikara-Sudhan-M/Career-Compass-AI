const User = require("../models/Users");

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

    if (!user.savedCareers.includes(careerId)) {
      user.savedCareers.push(careerId);
      await user.save();
    }

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

    const user = await User.findById(userId).populate(
      "savedCareers"
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      savedCareers: user.savedCareers,
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

    user.savedCareers = user.savedCareers.filter(
      (id) => id.toString() !== careerId
    );

    await user.save();

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