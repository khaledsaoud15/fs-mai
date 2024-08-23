const { getInfo, renderHTML } = require("../controllers/test.controller");

const router = require("express").Router();

router.get("/test", getInfo);
router.get("/render", renderHTML);

module.exports = router;
