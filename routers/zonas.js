import { Router } from "express";
import passport from "../jwt/passport.js";

const appZonas = Router();

appZonas.use(passport.authenticate("bearer", { session: false }));

export default appZonas;
