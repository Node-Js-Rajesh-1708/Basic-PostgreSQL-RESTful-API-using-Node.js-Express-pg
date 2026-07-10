const { body, param, validationResult } = require("express-validator");

// Validation for creating a user
const validateCreateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  
  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile number must be exactly 10 digits"),
  
  body("is_active")
    .optional()
    .isBoolean()
    .withMessage("is_active must be a boolean"),
];

// Validation for updating a user
const validateUpdateUser = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
  
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  
  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  
  body("mobile")
    .optional()
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile number must be exactly 10 digits"),
  
  body("is_active")
    .optional()
    .isBoolean()
    .withMessage("is_active must be a boolean"),
];

// Validation for getting a user by ID
const validateGetUserById = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
];

// Validation for getting a user by name
const validateGetUserByName = [
  param("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
];

// Validation for deleting a user by ID
const validateDeleteUser = [
  param("id")
    .isInt()
    .withMessage("ID must be a valid integer"),
];

// Validation for update many users
const validateUpdateManyUsers = [
  body("names")
    .isArray({ min: 1 })
    .withMessage("names must be a non-empty array"),
  
  body("names.*")
    .trim()
    .notEmpty()
    .withMessage("Each name in the array is required"),
  
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  
  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  
  body("mobile")
    .optional()
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage("Mobile number must be exactly 10 digits"),
  
  body("is_active")
    .optional()
    .isBoolean()
    .withMessage("is_active must be a boolean"),
];

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateGetUserById,
  validateGetUserByName,
  validateDeleteUser,
  validateUpdateManyUsers,
};
