import express from 'express';
import { MyServer } from './config/variables.js';

import appAnimales from './routers/animales.js';
import appEmpleados from './routers/empleados.js';
import appInsumos from './routers/insumos.js';
import appTaquillas from './routers/taquilla.js';
import appZonas from './routers/zonas.js';
import appLogin from './login/login.js';

let app = express();
app.use(express.json());
app.use("/login",appLogin)

app.use("/animales", appAnimales);
app.use("/empleados", appEmpleados);
app.use("/insumos", appInsumos);
app.use("/taquillas", appTaquillas);
app.use("/zonas", appZonas);

app.listen(MyServer, () => console.log(`http://${MyServer.hostname}:${MyServer.port}`));