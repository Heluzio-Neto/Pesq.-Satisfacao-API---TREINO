import { Request, Response } from "express";
import { CreateTechnicalService } from "../../services/tecnicos/CreateTechnicalService";

class CreateTecnicoController { 
    async handle(req: Request, res: Response){
        const { name } = req.body;

        const createTecnicoService = new CreateTechnicalService();

        const tecnico = await createTecnicoService.execute({ 
            name
        });

        return res.json(tecnico).status(201);
    }
}

export { CreateTecnicoController }