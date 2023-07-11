// server here
import express from "express";
import cors from "cors";

import apiErrorHandler from "./middlewares/apiErrorHandler";
import productRouter from "./routes/products";
import userRouter from "./routes/users";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/users", userRouter);

app.use(apiErrorHandler);

export default app;
