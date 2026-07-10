const userService = require("../services/user.service");
const ErrorHandler = require("../utils/errorHandler");

const createUser = async (req, res, next) => {
  try {
    // Check if user with the same email already exists
    const user = await userService.createUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });

  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();  
    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  }
  catch (error) {
    next(error);
  }
};

const getUserByName = async (req, res, next) => {
  try {
    const users = await userService.getUserByName(req.params.name);
    
    if (!users || users.length === 0) {
      return next(new ErrorHandler("No users found with that name", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  }
  catch (error) {
    next(error);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const updateManyUsers = async (req, res, next) => {
  try {
    const users = await userService.updateManyUsers(req.body);
    
    if (!users || users.length === 0) {
      return next(new ErrorHandler("No users found to update", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Users updated successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }   
}

const deleteManyUsers = async (req, res, next) => {
  try {
    const users = await userService.deleteManyUsers();
    
    if (!users || users.length === 0) {
      return next(new ErrorHandler("No users found to delete", 404));
    }

    return res.status(200).json({
      success: true,
      message: "Users deleted successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
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
