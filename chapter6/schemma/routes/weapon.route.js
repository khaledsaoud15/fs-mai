const {
  addWeapon,
  getAllWeapons,
  deletWeapon,
  updateWeapon,
} = require("../controllers/weapon.controller");

const router = require("express").Router();

router.post("/weapon", addWeapon);
router.get("/all", getAllWeapons);
router.delete("/delete/:id", deletWeapon);
router.put("/update/:id", updateWeapon);

module.exports = router;
