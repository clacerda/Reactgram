const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

//Generat user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "7d",
    });
};

// Register user and sign in
const register = async(req, res) => {
    const {name, email, password} = req.body

    //check if user exists
    const user = await User.findOne({email});

    if (user) {
        res.status(422).json({errors: ["E-mail já utilizado"]});
    }

    //Generate password Hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //Create user 
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    });

    //If user was created sucessfully, return token
    if(!newUser){
        res.status(422).json({errors: ["Ocorreu um erro, por favor tente mais tarde"]});
    }

    res.status(201).json({
        _id: newUser.id,
        token: generateToken(newUser._id)
    })
};

module.exports = {
    register,
};