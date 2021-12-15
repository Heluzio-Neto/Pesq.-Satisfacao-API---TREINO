import { Request, Response } from "express";
import { CreateTecnicoService } from "../services/tecnicos/createTecnicosService";

class CreateTecnicoController { 
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createTecnicoService = new CreateTecnicoService();

        const tecnico = await createTecnicoService.execute({ 
            name
        });

        return res.json(tecnico);
    }
}

export { CreateTecnicoController }