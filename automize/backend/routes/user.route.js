const { register, login } = require("../controllers/auth");
const { getUsers } = require("../controllers/user.controller");
const { verifyAdminAndToken } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", verifyAdminAndToken, getUsers);

module.exports = router;
