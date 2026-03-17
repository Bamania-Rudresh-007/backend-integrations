import expres from "express";
import { signUp, getAuthUsers, login } from "../controllers/auth.controller.js";

const authRoutes = expres.Router()



authRoutes.get("/get", getAuthUsers);
authRoutes.post("/signup", signUp);
authRoutes.post("/login", login);


export default authRoutes;