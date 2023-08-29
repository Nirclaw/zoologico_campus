import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../middleware/limit.js";
const appAnimales = Router();

appAnimales.use(limite(),passport.authenticate("bearer", { session: false }));

export default appAnimales;
