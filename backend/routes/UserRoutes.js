const express = require("express");
const router = express.Router();

// Controller
const {register, login} = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidations");
const {userCreateValidation, loginValidation} = require("../middlewares/userValidation");

//Routes
router.post("/register",userCreateValidation() , validate, register);
router.post("/login",loginValidation() , validate, login);

module.exports = router;