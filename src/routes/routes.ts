import { Router } from "express";

import { CreateTecnicoController } from "../controllers/CreateTecnicoController";

const router = Router();

const createTecnicoController = new CreateTecnicoController();

router.post("/tecnico", createTecnicoController.handle);

export { router };