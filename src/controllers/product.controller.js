const productService = require("../services/product.service");
const ErrorHandler = require("../utils/errorHandler");

const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();

    return res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductByName = async (req, res, next) => {
  try {
    const products = await productService.getProductByName(req.params.name);

    if (!products || products.length === 0) {
      return next(new ErrorHandler("No products found with that name", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateManyProducts = async (req, res, next) => {
  try {
    const products = await productService.updateManyProducts(req.body);

    if (!products || products.length === 0) {
      return next(new ErrorHandler("No products found to update", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Products updated successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteManyProducts = async (req, res, next) => {
  try {
    const products = await productService.deleteManyProducts();

    if (!products || products.length === 0) {
      return next(new ErrorHandler("No products found to delete", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Products deleted successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
  }
};

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
  getProductByName,
  updateProduct,
  updateManyProducts,
  deleteProduct,
  deleteManyProducts,
};
