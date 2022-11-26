const express = require("express");
const router = express.Router();

// Controller
const {register} = require("../controllers/UserController");

//middlewares
const validate = require("../middlewares/handleValidations");
const {userCreateValidation} = require("../middlewares/userValidation");

//Routes
router.post("/register",userCreateValidation() , validate, register);

module.exports = router;