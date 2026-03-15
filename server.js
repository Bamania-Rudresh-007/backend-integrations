import "dotenv/config"
import express from "express";
import router from "./routes/users.routes.js";
import connectDB from "./db/user.db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", router);
connectDB()


app.listen(port, () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})