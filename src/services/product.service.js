const pool = require("../config/db");
const productQuery = require("../queries/product.query");

const createProduct = async (data) => {
  const result = await pool.query(productQuery.CREATE_PRODUCT, [
    data.name,
    data.description,
    data.price,
    data.stock,
    data.is_active,
  ]);

  return result.rows[0];
};

const getProductById = async (id) => {
  const result = await pool.query(productQuery.GET_PRODUCT_BY_ID, [id]);
  return result.rows[0];
};

const getAllProducts = async () => {
  const result = await pool.query(productQuery.GET_ALL_PRODUCTS);
  return result.rows;
};

const getProductByName = async (name) => {
  const result = await pool.query(productQuery.GET_PRODUCT_BY_NAME, [name]);
  return result.rows;
};

const updateProduct = async (id, data) => {
  const result = await pool.query(productQuery.UPDATE_PRODUCT, [
    data.name,
    data.description,
    data.price,
    data.stock,
    data.is_active,
    id,
  ]);

  return result.rows[0];
};

const updateManyProducts = async (data) => {
  const result = await pool.query(productQuery.UPDATE_MANY_PRODUCTS, [
    data.name,
    data.description,
    data.price,
    data.stock,
    data.is_active,
    data.ids,
  ]);

  return result.rows;
};

const deleteProduct = async (id) => {
  const result = await pool.query(productQuery.DELETE_PRODUCT, [id]);
  return result.rows[0];
};

const deleteManyProducts = async () => {
  const result = await pool.query(productQuery.DELETE_MANY_PRODUCTS);
  return result.rows;
};

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
  getProductByName,
  updateProduct,
  updateManyProducts,
  deleteProduct,
  deleteManyProducts,
};
