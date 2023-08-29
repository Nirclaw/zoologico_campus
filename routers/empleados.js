import { Router } from "express";
import passport from "../jwt/passport.js";
const appEmpleados = Router();

appEmpleados.use(passport.authenticate("bearer", { session: false }));

export default appEmpleados;
