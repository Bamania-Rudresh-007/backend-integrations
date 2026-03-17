import "dotenv/config"
import express from "express";
import userRoutes from "./routes/users.routes.js";
import connectDB from "./db/user.db.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", userRoutes);
app.use("/auth", authRoutes);
connectDB()


app.listen(port, () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})