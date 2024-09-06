const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const responseHandler = require("../utils/responsHandler");

// bcrypt salt
const salt = 10;

// REGISTER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ email });
  user && responseHandler(res, 402, "User Already Exist");

  try {
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    responseHandler(res, 200, savedUser);
  } catch (err) {
    responseHandler(res, 500, err.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    !user && responseHandler(res, 401, "Please Register");
    const decrypted = await bcrypt.compare(password, user.password);
    !decrypted && responseHandler(res, 400, "Password Incorrect");

    const payload = {
      id: user.id,
      role: user.role,
    };

    jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) responseHandler(res, 500, err.message);

      responseHandler(res, 200, { ...user._doc, token });
    });
  } catch (err) {
    responseHandler(res, 500, err.message);
  }
};

module.exports = { register, login };
