import { Request, Response } from "express";
import { ListCalledService } from "../../services/chamados/ListCalledService"

class ListCalledController { 
    async handle(req: Request, res: Response){
        const createTecnicoService = new ListCalledService();
        const called = await createTecnicoService.execute();

        return res.json(called);
    }
}

export { ListCalledController }