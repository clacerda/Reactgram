const multer = require("multer");
const path = require("path");

// Destination to store image
const imageStore = multer.diskStorage({
    destination: function(req, file, callback){
        let folder = "";

        if(req.baseUrl.includes("users")){
            folder = "users"
        } else if (req.baseUrl.includes("photos")){
            folder = "photos"
        }

        callback(null, `uploads/${folder}/`)
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname));
    }
})

const imageUpload = multer({
    storage: imageStore,
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.(png|jpg)$/)){
            //UPLOAD ONLY PGN AND JPG FORMATS

            return callback(new Error("Apenas arquivos .png e .jpeg são permitidos."))
        }
        callback(undefined, true)
    }
});

module.exports = {imageUpload};