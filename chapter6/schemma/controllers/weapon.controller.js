const Weapon = require("../models/weapon.model");
const { responseHandler } = require("../utils/responsHandler");

// POST WEAPON
const addWeapon = async (req, res) => {
  const newWeapon = new Weapon(req.body);
  try {
    const savedWeapon = await newWeapon.save();
    responseHandler(res, 200, savedWeapon);
  } catch (err) {
    responseHandler(res, 500, "server err");
  }
};

// GET WEAPON
const getAllWeapons = async (req, res) => {
  let catQuery = req.query.category;
  let allWeapons;
  try {
    if (catQuery) {
      allWeapons = await Weapon.find({
        category: { $in: catQuery },
      });
      responseHandler(res, 200, allWeapons);
    } else {
      allWeapons = await Weapon.find();
      responseHandler(res, 200, allWeapons);
    }
  } catch (err) {
    responseHandler(res, 500, "server err");
  }
};

const deletWeapon = async (req, res) => {
  const id = req.params.id;
  try {
    await Weapon.findByIdAndDelete(id);
    responseHandler(res, 200, "weapon deleted");
  } catch (err) {
    responseHandler(res, 500, "server err");
  }
};

const updateWeapon = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedWeapon = await Weapon.findByIdAndUpdate(id, {
      $set: req.body,
    });
    responseHandler(res, 200, "updated");
  } catch (err) {
    responseHandler(res, 500, "cant update");
  }
};

module.exports = { addWeapon, getAllWeapons, deletWeapon, updateWeapon };
