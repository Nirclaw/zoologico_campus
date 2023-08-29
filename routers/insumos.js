import { Router } from "express";
const appInsumos = Router();

import passport from "../jwt/passport.js";

appInsumos.use(passport.authenticate("bearer", { session: false }));

export default appInsumos;
