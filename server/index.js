import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();
//Me permite extraer los archivos
//const _dirname = dirname(fileURLToPath(import.meta.url));
//Nos permite decir que servidores se pueden conectar
app.use(
  cors({
    origin: ["http://localhost:5173","https://cafeteria-pyc.000webhostapp.com/"],
  })
);
app.use(express.json());
app.use(taskRoutes);
app.use(indexRoutes);

//Para llamar la vista cliente
//app.use(express.static(join(_dirname, "../client/dist")));

//Pregunta si hay una variable de entorno sino usa el local
app.listen(PORT);
console.log(`Server is listening ${PORT}`);
