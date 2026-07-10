const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
const handleValidationErrors = require("../middlewares/validationError.middleware");
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateGetProductById,
  validateDeleteProduct,
} = require("../validations/product.validations");

router
  .route("/")
  .post(validateCreateProduct, handleValidationErrors, productController.createProduct)
  .get(productController.getAllProducts);

router
  .route("/delete-many")
  .delete(productController.deleteManyProducts);

router
  .route("/update-many")
  .put(productController.updateManyProducts);

router
  .route("/name/:name")
  .get(productController.getProductByName);

router
  .route("/:id")
  .get(validateGetProductById, handleValidationErrors, productController.getProductById)
  .put(validateUpdateProduct, handleValidationErrors, productController.updateProduct)
  .delete(validateDeleteProduct, handleValidationErrors, productController.deleteProduct);

module.exports = router;
