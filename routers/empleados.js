import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../helpers/limit/limit.js";
import {
  empleadoCargo,
  empleadoGetCedula,
  empleadoGetnombre,
  empleadosGet,
} from "../versiones/V1/empleados.js";
import { version } from "../config/variables.js";
import {
  empleadoPOSTO,
  empleadoPUT,
  empleadosDelete,
} from "../versiones/V2/empleados.js";
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

appEmpleados.get(
  "/cargo/:nom",
  version({
    "1.0.0": empleadoCargo,
    "2.0.0": empleadoCargo,
  })
);

appEmpleados.delete(
  "/delete/:id",
  version({
    "2.0.0": empleadosDelete,
  })
);

appEmpleados.put(
  "/update/:id",
  version({
    "2.0.0": empleadoPUT,
  })
);
appEmpleados.post(
  "/create",
  version({
    "2.0.0": empleadoPOSTO,
  })
);

export default appEmpleados;
