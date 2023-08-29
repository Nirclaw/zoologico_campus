import { Router } from "express";
import passport from "../jwt/passport.js";
const appAnimales = Router();

appAnimales.use(passport.authenticate("bearer", { session: false }));

export default appAnimales;
