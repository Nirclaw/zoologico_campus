import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../helpers/limit/limit.js";
import { version } from "../config/variables.js";
import {
  taquillaGetCedula,
  taquillaGetId,
  taquillasGet,
} from "../versiones/V1/taquilla.js";
import { taquillaPOSTO, taquillasDelete } from "../versiones/V2/taquilla.js";
import { taquillaDTOdelete, taquillaDTOpost } from "../middleware/DTO/taquilla.js";
const appTaquillas = Router();

appTaquillas.use(limite(), passport.authenticate("bearer", { session: false }));

appTaquillas.get(
  "/",
  version({
    "1.0.0": taquillasGet,
    "2.0.0": taquillasGet,
  })
);

appTaquillas.get(
  "/cedula/:id",
  version({
    "1.0.0": taquillaGetCedula,
    "2.0.0": taquillaGetCedula,
  })
);

appTaquillas.get(
  "/id/:id",
  version({
    "1.0.0": taquillaGetId,
    "2.0.0": taquillaGetId,
  })
);

appTaquillas.delete(
  "/delete/:id",taquillaDTOdelete,
  version({
    "2.0.0": taquillasDelete,
  })
);

appTaquillas.post(
  "/create",
  taquillaDTOpost,
  version({
    "2.0.0": taquillaPOSTO,
  })
);

export default appTaquillas;
