import { Router } from "express";

import { createUser, logInWithPassword } from "../controllers/users";

const router = Router();

router.post("/", createUser);

router.post("/login", logInWithPassword);

export default router;
