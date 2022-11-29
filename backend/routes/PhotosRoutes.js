const express = require("express");
const router = express.Router();

//Controller


//Middlewares
const {photoInsertValidation} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");

//Routes

module.exports = router;