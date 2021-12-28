import { Request, Response } from "express";
import { CreateCalledService } from "../../services/chamados/CreateCalledService";
class CreateCalledController { 
    async handle(req: Request, res: Response){
        const {  cod_chamado, cliente,telefone, descricao, technical_name, nota } = req.body;
        try{ 
            const createCalledService = new CreateCalledService();

            if(typeof cod_chamado !== 'string'){
                return res.status(400).json({ errors: "cod_chamado - Data  type is invalid"});
            }
            if(typeof cliente !== 'string' || cliente.length <=5){
                return res.status(400).json({ errors: "Size of client name is small"});
            }
            if(typeof technical_name !== 'string'){
                return res.status(400).json({ errors: "name Data type is invalid"});
            }
            if(typeof descricao !== 'string'){
                return res.status(400).json({ errors: "name Data type is invalid"});
            }
            if(typeof telefone !== 'string'){
                return res.status(400).json({ errors: "name Data type is invalid"});
            }
            if(typeof nota !== 'number' || nota.valueOf() < 0 && nota.valueOf()  > 5){
                return res.status(400).json({ errors: "Data type is invalid || value invalid"});
            }
            
            const called = await createCalledService.execute({  cod_chamado, cliente, telefone, descricao,technical_name, nota });
            return res.status(201).json(called);
        }catch(e){ 
            return res.status(400).json({ errors: e.message});
        }
    }
}

export { CreateCalledController }