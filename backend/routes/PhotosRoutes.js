const express = require("express");
const router = express.Router();

//Controller
const {insertPhoto, 
       deletePhoto, 
       getAllPhotos, 
       getUserPhotos, 
       getPhotoById, 
       updatePhoto, 
       likePhoto, 
       commentPhoto
    } = require("../controllers/PhotoController");

//Middlewares
const {photoInsertValidation, photoUpdateValidation, commentValidation} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");
const {imageUpload} = require("../middlewares/imageUpload");
const { route } = require("./Router");

//Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.delete("/:id", authGuard, deletePhoto );
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto, );
router.put("/like/:id", authGuard, likePhoto );
router.put("/comment/:id", authGuard, commentValidation(), validate, commentPhoto );

module.exports = router;