import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../middleware/limit.js";
import {
  empleadoCargo,
  empleadoGetCedula,
  empleadoGetnombre,
  empleadosGet,
} from "../versiones/V1/empleados.js";
import { version } from "../config/variables.js";
const appEmpleados = Router();

appEmpleados.use(limite(), passport.authenticate("bearer", { session: false }));

appEmpleados.get(
  "/",
  version({
    "1.0.0": empleadosGet,
    "2.0.0": empleadosGet,
  })
);

appEmpleados.get(
  "/cedula/:id",
  version({
    "1.0.0": empleadoGetCedula,
    "2.0.0": empleadoGetCedula,
  })
);
appEmpleados.get(
  "/nombre/:nom",
  version({
    "1.0.0": empleadoGetnombre,
    "2.0.0": empleadoGetnombre,
  })
);

appEmpleados.get("/cargo/:nom",version({
  "1.0.0": empleadoCargo,
  "2.0.0": empleadoCargo,
}))

export default appEmpleados;
