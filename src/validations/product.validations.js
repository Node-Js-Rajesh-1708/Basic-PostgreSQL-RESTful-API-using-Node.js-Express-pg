const { body, param, validationResult } = require("express-validator");

// Validation for creating a product
const validateCreateProduct = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 2, max: 150 })
    .withMessage("Product name must be between 2 and 150 characters"),
  
  body("description")
    .trim()
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),
  
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0.01 })
    .withMessage("Price must be a positive number"),
  
  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a non-negative integer"),
  
  body("category")
    .trim()
    .optional()
    .isLength({ min: 2, max: 100 })
    .withMessage("Category must be between 2 and 100 characters"),
];

// Validation for updating a product
const validateUpdateProduct = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
  
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 150 })
    .withMessage("Product name must be between 2 and 150 characters"),
  
  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),
  
  body("price")
    .optional()
    .isFloat({ min: 0.01 })
    .withMessage("Price must be a positive number"),
  
  body("quantity")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Quantity must be a non-negative integer"),
  
  body("category")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Category must be between 2 and 100 characters"),
];

// Validation for getting a product by ID
const validateGetProductById = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
];

// Validation for deleting a product
const validateDeleteProduct = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
];

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
  validateGetProductById,
  validateDeleteProduct,
};
