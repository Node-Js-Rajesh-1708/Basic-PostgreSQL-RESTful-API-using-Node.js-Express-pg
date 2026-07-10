const { validationResult } = require("express-validator");
const ErrorHandler = require("../utils/errorHandler");

/**
 * Middleware to handle validation errors
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => ({
      field: error.param,
      message: error.msg,
    }));
    
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: errorMessages,
    });
  }
  next();
};

module.exports = handleValidationErrors;
