import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../helpers/limit/limit.js";
import { version } from "../config/variables.js";

import { insumosAll, insumosName } from "../versiones/V1/insumos.js";
import { insumosPost, insumosPut, insumosDelete } from "../versiones/V2/insumos.js";

const appInsumos = Router();

appInsumos.use(limite(),passport.authenticate("bearer", { session: false }));

appInsumos.get("/", version({
        "1.0.0": insumosAll,
        "2.0.0": insumosAll,
    })
);

appInsumos.get("/nombre/:nombre", version({
        "1.0.0": insumosName,
        "2.0.0": insumosName,
    })
);

appInsumos.post("/", version({
        "2.0.0": insumosPost,
    })
);

appInsumos.put("/:id", version({
        "2.0.0": insumosPut,
    })
);

appInsumos.delete("/:id", version({
        "2.0.0": insumosDelete,
    })
);

export default appInsumos;
