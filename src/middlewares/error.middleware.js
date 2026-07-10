/**
 * Global Error Handler Middleware
 * This middleware should be used last (after all other middlewares and routes)
 */
const errorHandler = (err, req, res, next) => {
  // Default error values
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Handle specific error types
  
  // Duplicate key error (mostly for unique constraint violations)
  if (err.code === "23505") {
    const message = err.detail || "Duplicate entry found";
    err.statusCode = 409;
    err.message = message;
  }

  // Foreign key constraint error
  if (err.code === "23503") {
    err.statusCode = 400;
    err.message = err.detail || "Invalid reference or dependency violation";
  }

  // Not null constraint error
  if (err.code === "23502") {
    err.statusCode = 400;
    err.message = err.detail || "Required field missing";
  }

  // Check constraint error
  if (err.code === "23514") {
    err.statusCode = 400;
    err.message = err.detail || "Constraint violation";
  }

  // Invalid input syntax error
  if (err.code === "42601" || err.code === "42P01") {
    err.statusCode = 400;
    err.message = "Invalid query or database error";
  }

  // Unauthorized error
  if (err.statusCode === 401) {
    err.message = err.message || "Unauthorized access";
  }

  // Forbidden error
  if (err.statusCode === 403) {
    err.message = err.message || "Forbidden resource";
  }

  // Not found error
  if (err.statusCode === 404) {
    err.message = err.message || "Resource not found";
  }

  // Bad request error
  if (err.statusCode === 400) {
    err.message = err.message || "Bad request";
  }

  // Conflict error
  if (err.statusCode === 409) {
    err.message = err.message || "Conflict with existing resource";
  }

  // Log the error in development
  if (process.env.NODE_ENV === "development") {
    console.error("Error:", {
      statusCode: err.statusCode,
      message: err.message,
      stack: err.stack,
      originalError: err,
    });
  }

  // Send error response
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
