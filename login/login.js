import { Router } from "express";
import { CreateToken } from "../jwt/jwt.js";

const appLogin = Router();

appLogin.use("/", CreateToken);

export default appLogin;
