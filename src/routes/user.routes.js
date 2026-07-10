const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const handleValidationErrors = require("../middlewares/validationError.middleware");
const {
  validateCreateUser,
  validateUpdateUser,
  validateGetUserById,
  validateGetUserByName,
  validateDeleteUser,
  validateUpdateManyUsers,
} = require("../validations/user.validations");

router
     .route("/")
     .post(validateCreateUser, handleValidationErrors, userController.createUser)
     .get(userController.getAllUsers);

router
     .route("/delete-many")
     .delete(userController.deleteManyUsers);

router
     .route("/update-many")
     .put(validateUpdateManyUsers, handleValidationErrors, userController.updateManyUsers);

router
     .route("/:id")
     .get(validateGetUserById, handleValidationErrors, userController.getUserById)
     .put(validateUpdateUser, handleValidationErrors, userController.updateUser)
     .delete(validateDeleteUser, handleValidationErrors, userController.deleteUser);

router
     .route("/name/:name")
     .get(validateGetUserByName, handleValidationErrors, userController.getUserByName);

module.exports = router;