import { Router } from "express";

import { CreateTecnicoController } from "../controllers/tecnicos/CreateTecnicosController";
import { ListTecnicosController } from "../controllers/tecnicos/ListTecnicosController";

import { CreateCalledController } from "../controllers/chamados/CreateCalledController"
import { ListCalledController } from "../controllers/chamados/ListCalledController";
import { ListCalledByTechnicalController } from "../controllers/chamados/ListCalledByTechnicalController"
import { ListCalledByNameController } from "../controllers/chamados/ListCalledByNameController"

const router = Router();

const createTecnicoController = new CreateTecnicoController();
const listTecnicosController = new ListTecnicosController();

const createCalledService = new CreateCalledController();
const listCalledService = new ListCalledController();
const listCalledByTechnicalController = new ListCalledByTechnicalController();
const listCalledByNameController = new ListCalledByNameController();

//Tecnicos

router.post("/tecnico", createTecnicoController.handle);
router.get("/tecnicos", listTecnicosController.handle);


//Chamados
router.post("/chamados",createCalledService.handle);
router.get("/chamados", listCalledService.handle);
router.get("/chamados/:id", listCalledByTechnicalController.handle);
router.post("/chamados/buscar", listCalledByNameController.handle);

export { router };