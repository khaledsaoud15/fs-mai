const User = require("../models/user.model");
const { responseHandler } = require("../utils/responsHandler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  try {
    const existingUser = await User.findOne({ email });
    existingUser && responseHandler(res, 400, "Email already exists");

    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    responseHandler(res, 201, user);
  } catch (err) {
    responseHandler(res, 500, "Internal Server Error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && responseHandler(res, 400, "Please register");

    const decryptedPassword = await bcrypt.compare(password, user.password);
    !decryptedPassword && responseHandler(res, 400, "Invalid password");

    const payload = {
      id: user.id,
      role: user.role,
    };

    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) throw err;
      return responseHandler(res, 200, {
        ...user._doc,
        token,
      });
    });
  } catch (err) {
    responseHandler(res, 500, "Internal Server Error");
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const u = await User.findByIdAndUpdate(id, { $set: req.body });
    console.log(u);

    responseHandler(res, 200, "updated success");
  } catch (err) {
    responseHandler(res, 500, "Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    responseHandler(res, 200, "Deleted");
  } catch (err) {
    responseHandler(res, 500, "Internal Server Error");
  }
};

module.exports = { register, login, updateUser, deleteUser };
