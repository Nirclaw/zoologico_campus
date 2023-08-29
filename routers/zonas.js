import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../middleware/limit.js";
const appZonas = Router();

appZonas.use(limite(), passport.authenticate("bearer", { session: false }));

export default appZonas;
