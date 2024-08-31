const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { responseHandler } = require("../utils/responsHandler");

dotenv.config();
const verifyUserAndToken = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return responseHandler(res, 401, "No token,Authorization failed");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    responseHandler(res, 401, "Token is not Valid");
  }
};
const verifyAdminAndToken = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return responseHandler(res, 401, "No token,Authorization failed");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role === "admin") {
      req.user = decoded;
      next();
    } else {
      responseHandler(res, 402, "You are not Authenticated");
    }
  } catch (err) {
    responseHandler(res, 401, "Token is not Valid");
  }
};

module.exports = { verifyUserAndToken,verifyAdminAndToken };
