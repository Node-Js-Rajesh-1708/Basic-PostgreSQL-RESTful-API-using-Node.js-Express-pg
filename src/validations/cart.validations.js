const { body, param } = require("express-validator");

// Validation for adding item to cart
const validateAddToCart = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be a valid integer"),
  
  body("product_id")
    .notEmpty()
    .withMessage("product_id is required")
    .isInt()
    .withMessage("product_id must be a valid integer"),
  
  body("quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isInt({ min: 1 })
    .withMessage("quantity must be at least 1"),
];

// Validation for updating cart item
const validateUpdateCartItem = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
  
  body("quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("quantity must be at least 1"),
];

// Validation for getting cart items by user
const validateGetCartByUser = [
  param("userId")
    .isInt()
    .withMessage("userId must be a valid integer"),
];

// Validation for removing item from cart
const validateRemoveFromCart = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
];

// Validation for clearing user's cart
const validateClearCart = [
  param("userId")
    .isInt()
    .withMessage("userId must be a valid integer"),
];

module.exports = {
  validateAddToCart,
  validateUpdateCartItem,
  validateGetCartByUser,
  validateRemoveFromCart,
  validateClearCart,
};
