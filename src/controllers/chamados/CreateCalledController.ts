import { Request, Response } from "express";
import { CreateCalledService } from "../../services/chamados/CreateCalledService";

class CreateCalledController { 
    async handle(req: Request, res: Response){
        const {  cod_chamado, cliente,  technical_id, nota } = req.body;

        const createCalledService = new CreateCalledService();

        const called = await createCalledService.execute({ 
            cod_chamado,
            cliente,
            technical_id,
            nota
        });

        return res.json(called).status(201);
    }
}

export { CreateCalledController }