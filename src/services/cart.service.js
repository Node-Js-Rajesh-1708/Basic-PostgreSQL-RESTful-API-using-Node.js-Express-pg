const pool = require("../config/db");
const cartQuery = require("../queries/cart.query");

const createCart = async (data) => {
  const result = await pool.query(cartQuery.CREATE_CART, [
    data.user_id,
    data.product_id,
    data.quantity,
  ]);

  return result.rows[0];
};

const getCartById = async (id) => {
  const result = await pool.query(cartQuery.GET_CART_BY_ID, [id]);
  return result.rows[0];
};

const getAllCarts = async () => {
  const result = await pool.query(cartQuery.GET_ALL_CARTS);
  return result.rows;
};

const getCartByUserId = async (userId) => {
  const result = await pool.query(cartQuery.GET_CART_BY_USER_ID, [userId]);
  return result.rows;
};

const updateCart = async (id, data) => {
  const result = await pool.query(cartQuery.UPDATE_CART, [
    data.user_id,
    data.product_id,
    data.quantity,
    id,
  ]);

  return result.rows[0];
};

const updateManyCarts = async (data) => {
  const result = await pool.query(cartQuery.UPDATE_MANY_CARTS, [
    data.user_id,
    data.product_id,
    data.quantity,
    data.ids,
  ]);

  return result.rows;
};

const deleteCart = async (id) => {
  const result = await pool.query(cartQuery.DELETE_CART, [id]);
  return result.rows[0];
};

const deleteManyCarts = async () => {
  const result = await pool.query(cartQuery.DELETE_MANY_CARTS);
  return result.rows;
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
