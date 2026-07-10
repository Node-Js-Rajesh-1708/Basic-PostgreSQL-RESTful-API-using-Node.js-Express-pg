const express = require('express');
const config = require('./config/env');
const pool = require('./config/db');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const errorHandler = require('./middlewares/error.middleware');
const app = express();
const port = config.Port;


app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// 404 handler - should be before error handler
app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: error.message,
  });
});

// Global error handler middleware - must be last
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
