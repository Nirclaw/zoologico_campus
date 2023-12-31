import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../helpers/limit/limit.js";
import { version } from "../config/variables.js";

import { validateZonasParams, validateZonasBody } from "../middleware/DTO/zonas.js";

import { zonasAll, zonasName } from "../versiones/V1/zonas.js";
import { zonasPost, zonasPut, zonasDelete } from "../versiones/V2/zonas.js";

const appZonas = Router();

appZonas.use(limite(), passport.authenticate("bearer", { session: false }));

appZonas.get("/", version({
        "1.0.0": zonasAll,
        "2.0.0": zonasAll,
    })
);

appZonas.get("/:nombre", version({
        "1.0.0": zonasName,
        "2.0.0": zonasName,
    })
);

appZonas.post("/", validateZonasBody, version({
        "2.0.0": zonasPost,
    })
);

appZonas.put("/:id", validateZonasParams, validateZonasBody, version({
        "2.0.0": zonasPut,
    })
);

appZonas.delete("/:id", validateZonasParams, version({
        "2.0.0": zonasDelete,
    })
);

export default appZonas;