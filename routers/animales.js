import { Router } from "express";
import passport from "../jwt/passport.js";
import { limite } from "../helpers/limit/limit.js";
import { version } from "../config/variables.js";

import { animalsAll, animalsFood, animalsHabit, animalsName } from "../versiones/V1/animales.js";
import { animalsPost, animalsPut, animalsDelete } from "../versiones/V2/animales.js";

const appAnimales = Router();
appAnimales.use(limite(),passport.authenticate("bearer", { session: false }));

appAnimales.get("/", version({
        "1.0.0": animalsAll,
        "2.0.0": animalsAll,
    })
);

appAnimales.get("/food/:food", version({
        "1.0.0": animalsFood,
        "2.0.0": animalsFood,
    })
);

appAnimales.get("/habit/:habit", version({
        "1.0.0": animalsHabit,
        "2.0.0": animalsHabit,
    })
);

appAnimales.get("/name/:name", version({
        "1.0.0": animalsName,
        "2.0.0": animalsName,
    })
);

appAnimales.post("/", version({
        "2.0.0": animalsPost,
    })
);

appAnimales.put("/:id", version({
        "2.0.0": animalsPut,
    })
);

appAnimales.delete("/:id", version({
        "2.0.0": animalsDelete,
    })
);

export default appAnimales;
