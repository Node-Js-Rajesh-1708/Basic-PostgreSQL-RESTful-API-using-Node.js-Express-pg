const cartService = require("../services/cart.service");
const ErrorHandler = require("../utils/errorHandler");

const createCart = async (req, res, next) => {
  try {
    const cart = await cartService.createCart(req.body);

    return res.status(201).json({
      success: true,
      message: "Cart created successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const getCartById = async (req, res, next) => {
  try {
    const cart = await cartService.getCartById(req.params.id);

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Cart retrieved successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCarts = async (req, res, next) => {
  try {
    const carts = await cartService.getAllCarts();

    return res.status(200).json({
      success: true,
      message: "Carts retrieved successfully",
      data: carts,
    });
  } catch (error) {
    next(error);
  }
};

const getCartByUserId = async (req, res, next) => {
  try {
    const carts = await cartService.getCartByUserId(req.params.userId);

    if (!carts || carts.length === 0) {
      return next(new ErrorHandler("No carts found for this user", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Carts retrieved successfully",
      data: carts,
    });
  } catch (error) {
    next(error);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const cart = await cartService.updateCart(req.params.id, req.body);

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const updateManyCarts = async (req, res, next) => {
  try {
    const carts = await cartService.updateManyCarts(req.body);

    if (!carts || carts.length === 0) {
      return next(new ErrorHandler("No carts found to update", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Carts updated successfully",
      data: carts,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const cart = await cartService.deleteCart(req.params.id);

    if (!cart) {
      return next(new ErrorHandler("Cart not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Cart deleted successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const deleteManyCarts = async (req, res, next) => {
  try {
    const carts = await cartService.deleteManyCarts();

    if (!carts || carts.length === 0) {
      return next(new ErrorHandler("No carts found to delete", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Carts deleted successfully",
      data: carts,
    });
  } catch (error) {
    next(error);
  }
  }
};

module.exports = {
  createCart,
  getCartById,
  getAllCarts,
  getCartByUserId,
  updateCart,
  updateManyCarts,
  deleteCart,
  deleteManyCarts,
};
