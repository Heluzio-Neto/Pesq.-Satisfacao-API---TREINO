import { Request, Response } from "express";
import { ListTecnicosService } from "../../services/tecnicos/ListTechnicalService";

class ListTecnicosController { 
    async handle(req: Request, res: Response){
        const createTecnicoService = new ListTecnicosService();
        const tecnicos = await createTecnicoService.execute();

        return res.json(tecnicos);
    }
}

export { ListTecnicosController }