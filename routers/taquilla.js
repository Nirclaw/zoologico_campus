import { Router } from "express";
const appTaquillas = Router();
import passport from "../jwt/passport.js";

appTaquillas.use(passport.authenticate("bearer", { session: false }));

export default appTaquillas;
