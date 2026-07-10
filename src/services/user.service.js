const bcrypt = require("bcrypt");
const pool = require("../config/db");
const userQuery = require("../queries/user.query");

const createUser = async (data) => {
     const hashedPassword = await bcrypt.hash(data.password, 10);

     const result = await pool.query(userQuery.CREATE_USER, [
          data.name,
          data.email,
          data.mobile,
          hashedPassword,
          data.is_active
     ]);

     return result.rows[0];
};

const getUserById = async (id) => {
     const result = await pool.query(userQuery.GET_USER_BY_ID, [id]);
     return result.rows[0];
}

const getAllUsers = async () => {
     const result = await pool.query(userQuery.GET_ALL_USERS);
     return result.rows;
};

const getUserByName = async (name) => {
     const result = await pool.query(userQuery.GET_USER_BY_NAME, [name]);
     return result.rows;
};

const updateUser = async (id, data) => {
     const result = await pool.query(userQuery.UPDATE_USER, [
          data.name,
          data.email,
          data.mobile,
          data.is_active,
          id
     ]);
     return result.rows[0];
};

const updateManyUsers = async (data) => {
     const result = await pool.query(userQuery.UPDATE_MANY_USERS, [
          data.name,
          data.email,
          data.mobile,
          data.is_active,
          data.names 
     ]);
     return result.rows;
};

const deleteUser = async (id) => {
     const result = await pool.query(userQuery.DELETE_USER, [id]);
     return result.rows[0];
};

const deleteManyUsers = async () => {
     const result = await pool.query(userQuery.DELETE_MANY_USERS);
     return result.rows;
};


module.exports = {
     createUser,
     getUserById,
     getAllUsers,
     getUserByName,
     updateUser,
     updateManyUsers,
     deleteUser,
     deleteManyUsers
};
