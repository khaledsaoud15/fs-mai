const jwt = require("jsonwebtoken");
const responseHandler = require("../utils/responsHandler");

const verifyUserAndToken = async (req, res, next) => {
  const token = req.headers["x-auth-token"];

  if (!token) {
    responseHandler(res, 403, "Token missing");
  }
  try {
    const decoded = jwt.verify(process.env.SECRET_KEY, token);
    req.user = decoded;
    next();
  } catch (err) {
    responseHandler(res, 403, "Invalid token");
  }
};

const verifyAdminAndToken = async (req, res, next) => {
  const token = req.headers["x-auth-token"];
  !token && responseHandler(res, 500, "NO TOKEN");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role === "admin") {
      req.user = decoded;
      next();
    } else {
      responseHandler(res, 402, "You are not Authenticated");
    }
  } catch (err) {
    responseHandler(res, 403, "Invalid token");
  }
};

module.exports = { verifyUserAndToken, verifyAdminAndToken };
