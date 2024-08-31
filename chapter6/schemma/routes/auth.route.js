const {
  register,
  login,
  updateUser,
  deleteUser,
} = require("../controllers/auth.controller");
const { verifyUserAndToken } = require("../middlewares/token");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.put("/updateUser/:id", verifyUserAndToken, updateUser);
router.delete("/deleteUser/:id", verifyUserAndToken, deleteUser);

module.exports = router;
