import expres from "express";
import { signUp, getAuthUsers } from "../controllers/auth.controller.js";

const authRoutes = expres.Router()



authRoutes.get("/get", getAuthUsers);
authRoutes.post("/signup", signUp);

export default authRoutes;