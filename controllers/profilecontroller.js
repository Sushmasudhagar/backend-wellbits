const UserRepository =
  require("../repositories/userRepository");

const getProfile = async (req, res) => {

  try {

    const user =
      await UserRepository.getUserById(
        req.user.userId
      );

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

const updateProfile = async (req, res) => {

  try {

    const user =
      await UserRepository.updateProfile(
        req.user.userId,
        req.body
      );

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getProfile,
  updateProfile
};