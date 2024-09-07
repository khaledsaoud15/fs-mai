const Product = require("../models/product.model");
const responseHandler = require("../utils/responsHandler");

// POST PRODUCT

const postProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    responseHandler(res, 200, savedProduct);
  } catch (err) {
    responseHandler(res, 500, err.message);
  }
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  let catQuery = req.query.category;
  let products;
  try {
    if (catQuery) {
      catQuery = catQuery.split(",");
      products = await Product.find({ category: { $in: [...catQuery] } });
    } else {
      products = await Product.find();
    }

    responseHandler(res, 200, products);
  } catch (err) {
    responseHandler(res, 500, err.message);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    // Fetch the existing product to get current category array
    const findProduct = await Product.findById(id);
    if (!findProduct) {
      return responseHandler(res, 404, "Product not found");
    }

    // Extract current category array and other fields from the existing product
    const { category: currentCategories, ...otherFields } =
      findProduct.toObject();
    const {
      category: newCategories,
      title,
      image,
      model,
      description,
      price,
      refrence,
    } = req.body;

    // Create an object with updated fields
    const updatedFields = {
      ...otherFields,
      title,
      image,
      model,
      description,
      price,
      refrence,
    };

    // Update the product with new fields and add new categories
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: updatedFields,
        $addToSet: { category: { $each: newCategories } }, // Ensure no duplicates are added
      },
      { new: true }
    );

    // Send response with updated product
    responseHandler(res, 200, { updatedProduct });
  } catch (err) {
    responseHandler(res, 500, err.message);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    responseHandler(res, 200, deletedProduct);
  } catch (error) {
    responseHandler(res, 500, error.message);
  }
};

module.exports = { postProduct, getAllProducts, updateProduct, deleteProduct };
