const User = require("../models/User");

const findUserByMobile = async (mobile) => {
  return await User.findOne({ mobile });
};

const createUser = async (mobile) => {
  return await User.create({ mobile });
};

const updateProfile = async (userId, data) => {
  return await User.findByIdAndUpdate(
    userId,
    data,
    { new: true }
  );
};

const getUserById = async (id) => {
  return await User.findById(id);
};

module.exports = {
  findUserByMobile,
  createUser,
  updateProfile,
  getUserById
};