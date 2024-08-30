const {
  addWeapon,
  getAllWeapons,
} = require("../controllers/weapon.controller");

const router = require("express").Router();

router.post("/weapon", addWeapon);
router.get("/all", getAllWeapons);

module.exports = router;
