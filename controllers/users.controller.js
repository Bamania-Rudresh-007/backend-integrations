import User from "../models/users.model.js";

const createUser = async (req, res) => {
    try {
        // console.log(req.body)
        const newUser = await User.create(req.body);

        res.json({
            message: "User created successfully",
            data: newUser,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Failed creating new user",
            error: error.message,
        });
    }
};

const readUsers = async (req, res) => {
    try {
        const allUsers = await User.find();

        res.json({
            message: "All user fetched successfully!!",
            data: allUsers,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed fetching users data from database",
            error: error.message,
        });
    }
};

const readUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.json({
            message: "user data fetched successfully!!",
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed fetching user from database",
            error: error.message,
        });
    }
};

const updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after", runValidators: true  },
        );

        res.json({
            message: "User updated successfully!!",
            data: updatedUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update the user data",
            error: error.message,
        });
    }
};

const delteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        
        res.json({
            message: "User deleted successfully!!",
            data: deletedUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete the user's data from the database",
            error: error.message,
        });
    }
};

export { readUsers, readUserById, createUser, updateUserById, delteUserById };
