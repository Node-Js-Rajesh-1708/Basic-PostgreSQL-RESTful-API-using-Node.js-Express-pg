const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart.controller");
const handleValidationErrors = require("../middlewares/validationError.middleware");
const {
  validateAddToCart,
  validateUpdateCartItem,
  validateGetCartByUser,
  validateRemoveFromCart,
  validateClearCart,
} = require("../validations/cart.validations");

router
  .route("/")
  .post(validateAddToCart, handleValidationErrors, cartController.createCart)
  .get(cartController.getAllCarts);

router
  .route("/delete-many")
  .delete(cartController.deleteManyCarts);

router
  .route("/update-many")
  .put(cartController.updateManyCarts);

router
  .route("/user/:userId")
  .get(validateGetCartByUser, handleValidationErrors, cartController.getCartByUserId);

router
  .route("/:id")
  .get(cartController.getCartById)
  .put(validateUpdateCartItem, handleValidationErrors, cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = router;
