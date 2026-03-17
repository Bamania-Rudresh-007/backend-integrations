// import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import AuthUser from "../models/authUser.model.js";

const signUp = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await AuthUser.create({
            name,
            email,
            password: encryptedPassword,
        });

        res.json({
            message: "User registered successfully",
            data: newUser,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
        next(error);
    }
};

const getAuthUsers = async (req, res) => {
    const users = await AuthUser.find();
    res.json({
        message: "All users retrieved successfully",
        data: users,
    });
};

export {signUp, getAuthUsers};