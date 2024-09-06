const User = require("../models/user.model");
const responseHandler = require("../utils/responsHandler");

// GET ALL USERS
const getUsers = async (req, res) => {
  const isNew = req.query.isNew;
  let users;
  try {
    if (isNew) {
      users = await User.find({}).sort({ createdAt: -1 }).limit(1);
    } else {
      users = await User.find({});
    }
    responseHandler(res, 200, users);
  } catch (err) {
    responseHandler(res, 500, err.message);
  }
};

module.exports = { getUsers };
