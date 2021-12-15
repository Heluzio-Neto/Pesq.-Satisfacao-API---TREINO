import { Router } from "express";

import { CreateTecnicoController } from "../controllers/tecnicos/CreateTecnicosController";
import { ListTecnicosController } from "../controllers/tecnicos/ListTecnicosController";

const router = Router();

const createTecnicoController = new CreateTecnicoController();
const listTecnicosController = new ListTecnicosController();

router.post("/tecnico", createTecnicoController.handle);
router.get("/tecnicos", listTecnicosController.handle);

export { router };