import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../middleware/limit.js";
const appTaquillas = Router();

appTaquillas.use(limite(), passport.authenticate("bearer", { session: false }));

export default appTaquillas;
