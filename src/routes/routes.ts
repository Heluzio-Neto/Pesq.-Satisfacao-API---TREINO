import { Router } from "express";

import { CreateTecnicoController } from "../controllers/tecnicos/CreateTecnicosController";
import { ListTecnicosController } from "../controllers/tecnicos/ListTecnicosController";

import { CreateCalledController } from "../controllers/chamados/CreateCalledController"
import { ListCalledController } from "../controllers/chamados/ListCalledController";
import { ListCalledByTechnicalController } from "../controllers/chamados/ListCalledByTechnicalController"
import { ListCalledByNameService } from "../services/chamados/ListCalledByNameService";

const router = Router();

const createTecnicoController = new CreateTecnicoController();
const listTecnicosController = new ListTecnicosController();

const createCalledService = new CreateCalledController();
const listCalledService = new ListCalledController();
const listCalledByTechnicalController = new ListCalledByTechnicalController();
const listCalledByName = new ListCalledByNameService();

//Tecnicos

router.post("/tecnico", createTecnicoController.handle);
router.get("/tecnicos", listTecnicosController.handle);


//Chamados
router.post("/chamados",createCalledService.handle);
router.get("/chamados", listCalledService.handle);
router.get("/chamados/:id", listCalledByTechnicalController.handle);
router.post("/chamados/buscar",createCalledService.handle);

export { router };