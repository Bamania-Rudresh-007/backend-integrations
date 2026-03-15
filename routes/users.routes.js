import express from "express";
import { readUsers, readUserById, createUser, updateUserById, delteUserById } from "../controllers/users.controller.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>hey there welcome to the implementation of the basic methods of http and mongoDb database crub operations</h1>");
})

router.get("/users", readUsers);
router.get("/users/:id", readUserById);
router.post("/users/data", createUser);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", delteUserById);

export default router;