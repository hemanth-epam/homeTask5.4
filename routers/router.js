const express = require("express");
const { userSchema } = require("../models/user");
const router = express.Router();
const userController = require("../controllers/userController");
const userValidator = require("../services/userService.js").userValidator;



router.get('/users', userController.getUsers);    //all users
router.get('/users/:id', userController.getUsersById);
router.post('/users',userValidator(userSchema), userController.saveUser);   //save user
router.put('/users/:id', userValidator(userSchema), userController.updateUser); //update by id
router.delete('/users/:id', userController.deleteUser); //delete by id
module.exports = {
    router: router,
}
