// import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const signUp = async(req, res, next) => {
    try{
        console.log(req.body);
        const {name, email, password} = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: encryptedPassword,
        })

        res.json({
            message: "User registered successfully",
            data: newUser
        })
    }
    catch(error){
        res.json({
            message: error.message,
        })
        next(error)
    }
}