import jwt from "jsonwebtoken";
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

const login = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await AuthUser.findOne({email})

        if(!user){
            res.status(400).json({
                message: "Invalid email or password",
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({
                message: "Invalid email or password",
            })
        }

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.json({
            message: "Login Successfull",
            token,
        })

    } catch (error) {
        next(error)
    }
}

export {signUp, getAuthUsers, login};