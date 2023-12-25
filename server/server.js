import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./Routes/UserRouter.js";
import artsRouter from "./Routes/ArtsRouter.js";
import categoriesRouter from "./Routes/CategoriesRouter.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import Uploadrouter from "./Controllers/UploadFile.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//Connected to MongoDB
connectDB();

//Main route
app.get("/", (req, res) => {
  res.send("Start Api");
});
// sub route
app.use("/api/users", userRouter);
app.use("/api/arts", artsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/upload", Uploadrouter);

// error
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in port http://localhost/${PORT}`);
});
