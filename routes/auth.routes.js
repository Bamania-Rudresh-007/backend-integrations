import expres from "express";
import { signUp, getAuthUsers, login } from "../controllers/auth.controller.js";
import protect from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/auth.controller.js";

const authRoutes = expres.Router()



authRoutes.get("/get", protect,getAuthUsers);
authRoutes.get("/profile", protect, getProfile)
authRoutes.post("/signup", signUp);
authRoutes.post("/login", login);


export default authRoutes;