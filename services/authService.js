const OTP = require("../models/OTP");
const UserRepository = require("../repositories/userRepository");
const { generateOTP } = require("../utils/otp");
const { generateToken } = require("../utils/jwt");

const sendOTP = async (mobile) => {

  const otp = generateOTP();

  await OTP.deleteMany({ mobile });

  await OTP.create({
    mobile,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000)
  });

  console.log(`OTP for ${mobile}: ${otp}`);

  return {
    success: true,
    message: "OTP sent successfully"
  };
};

const verifyOTP = async (mobile, enteredOtp) => {

  const otpRecord = await OTP.findOne({ mobile });

  if (!otpRecord)
    throw new Error("OTP not found");

  if (otpRecord.expiresAt < new Date())
    throw new Error("OTP expired");

  if (otpRecord.otp !== enteredOtp)
    throw new Error("Invalid OTP");

  let user = await UserRepository.findUserByMobile(mobile);

  if (!user) {
    user = await UserRepository.createUser(mobile);
  }

  user.isVerified = true;
  await user.save();

  await OTP.deleteMany({ mobile });

  const token = generateToken({
    userId: user._id
  });

  return {
    token,
    user
  };
};

module.exports = {
  sendOTP,
  verifyOTP
};