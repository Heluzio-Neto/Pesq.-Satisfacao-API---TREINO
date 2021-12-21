import { Request, Response } from "express";
import { CreateCalledService } from "../../services/chamados/CreateCalledService";
class CreateCalledController { 
    async handle(req: Request, res: Response){
        const {  cod_chamado, cliente,  technical_id, nota } = req.body;
        try{ 
            const createCalledService = new CreateCalledService();

            console.log({cod_chamado})

            if(typeof cod_chamado !== 'string'){
                return res.status(400).json({ errors: "cod_chamado - Data  type is invalid"});
            }
            if(typeof cliente !== 'string' || cliente.length <=5){
                return res.status(400).json({ errors: "size of name is small"});
            }
            if(typeof technical_id !== 'string'){
                return res.status(400).json({ errors: "id Data type is invalid"});
            }
            if(typeof nota !== 'number' || nota < 0 && nota < 5){
                return res.status(400).json({ errors: "Data type is invalid || value invalid"});
            }
            
            const called = await createCalledService.execute({  cod_chamado, cliente,  technical_id, nota });
            return res.status(201).json(called);
        }catch(e){ 
            return res.status(400).json({ errors: e.message});
        }
    }
}

export { CreateCalledController }