import express from "express";
import {
    readUsers,
    readUserById,
    createUser,
    updateUserById,
    delteUserById,
} from "../controllers/users.controller.js";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
    res.send(
        "<h1>hey there welcome to the implementation of the basic methods of http and mongoDb database crub operations</h1>",
    );
});

userRoutes.get("/users", readUsers);
userRoutes.get("/users/:id", readUserById);
userRoutes.post("/users/data", createUser);
userRoutes.put("/users/:id", updateUserById);
userRoutes.delete("/users/:id", delteUserById);

export default userRoutes;
