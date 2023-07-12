// server here
import express from "express";
import cors from "cors";
import passport from "passport";

import apiErrorHandler from "./middlewares/apiErrorHandler";
import productRouter from "./routes/products";
import userRouter from "./routes/users";
import { jwtStrategy } from "./config/passport";

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

app.use("/products", productRouter);
app.use("/users", userRouter);

app.use(apiErrorHandler);

export default app;
