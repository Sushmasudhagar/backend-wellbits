const authService = require("../services/authService");

const sendOTP = async (req, res) => {
  try {

    const { mobile } = req.body;

    const result =
      await authService.sendOTP(mobile);

    res.status(200).json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

const verifyOTP = async (req, res) => {
  try {

    const { mobile, otp } = req.body;

    const result =
      await authService.verifyOTP(
        mobile,
        otp
      );

    res.status(200).json(result);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });
  }
};

const logout = async (req, res) => {

  res.status(200).json({
    success: true,
    message: "Logout successful"
  });
};

module.exports = {
  sendOTP,
  verifyOTP,
  logout
};