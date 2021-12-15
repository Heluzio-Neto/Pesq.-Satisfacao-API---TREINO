import { Request, Response } from "express";
import { CreateTecnicosService } from "../../services/tecnicos/CreateTecnicosService";

class CreateTecnicoController { 
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createTecnicoService = new CreateTecnicosService();

        const tecnico = await createTecnicoService.execute({ 
            name
        });

        return res.json(tecnico);
    }
}

export { CreateTecnicoController }