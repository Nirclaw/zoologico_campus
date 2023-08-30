import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../middleware/limit.js";
import { version } from "../config/variables.js";

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

appZonas.post("/", version({
        "2.0.0": zonasPost,
    })
);

appZonas.put("/:id", version({
        "2.0.0": zonasPut,
    })
);

appZonas.delete("/:id", version({
        "2.0.0": zonasDelete,
    })
);

export default appZonas;