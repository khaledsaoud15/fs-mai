const {
  addWeapon,
  getAllWeapons,
  deletWeapon,
  updateWeapon,
} = require("../controllers/weapon.controller");
const { verifyAdminAndToken } = require("../middlewares/token");

const router = require("express").Router();

router.post("/weapon", verifyAdminAndToken, addWeapon);
router.get("/all", getAllWeapons);
router.delete("/delete/:id", verifyAdminAndToken, deletWeapon);
router.put("/update/:id", verifyAdminAndToken, updateWeapon);

module.exports = router;
