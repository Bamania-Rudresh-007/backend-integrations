import express from "express";
import { readUsers, readUserById, createUser, updateUserById, delteUserById } from "../controllers/users.controller.js"
import { signUp } from "../controllers/auth.controller.js";
import User from "../models/user.model.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>hey there welcome to the implementation of the basic methods of http and mongoDb database crub operations</h1>");
})
router.get("/authGet", async(req, res) => {
    const users = await User.find();
    res.json({
        message: "All users retrieved successfully",
        data: users
    })
});
router.post("/signup", signUp);
router.get("/users", readUsers);
router.get("/users/:id", readUserById);
router.post("/users/data", createUser);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", delteUserById);

export default router;