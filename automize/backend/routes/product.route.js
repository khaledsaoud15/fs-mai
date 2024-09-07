const {
  postProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { verifyAdminAndToken } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/product", verifyAdminAndToken, postProduct);
router.get("/allProducts", getAllProducts);
router.put("/update/:id", verifyAdminAndToken, updateProduct);
router.delete("/delete/:id", verifyAdminAndToken, deleteProduct);

module.exports = router;
