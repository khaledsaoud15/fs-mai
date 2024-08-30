const Weapon = require("../models/weapon.model");
const { responseHandler } = require("../utils/responsHandler");

// POST WEAPON
const addWeapon = async (req, res) => {
  const newWeapon = new Weapon(req.body);
  try {
    const savedWeapon = await newWeapon.save();
    responseHandler(res, 200, "addedWeapon", savedWeapon);
  } catch (err) {
    responseHandler(res, 500, "server err", err);
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
      responseHandler(res, 200, "weapon found", allWeapons);
    } else {
      allWeapons = await Weapon.find();
      responseHandler(res, 200, "weapon found", allWeapons);
    }
  } catch (err) {
    responseHandler(res, 500, "server err", err);
  }
};

const deletWeapon = async (req, res) => {
  const id = req.params.id;
  try {
    await Weapon.findByIdAndDelete(id);
    responseHandler(res, 200, "weapon deleted", id);
  } catch (err) {
    responseHandler(res, 500, "server err", err);
  }
};

const updateWeapon = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedWeapon = await Weapon.findByIdAndUpdate(id, {
      $set: req.body,
    });
    responseHandler(res, 200, "updated", updatedWeapon);
  } catch (err) {
    responseHandler(res, 500, "cant update", err);
  }
};

module.exports = { addWeapon, getAllWeapons, deletWeapon, updateWeapon };
