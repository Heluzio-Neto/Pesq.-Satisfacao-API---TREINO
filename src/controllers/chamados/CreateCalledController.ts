import { Request, Response } from "express";
import { CreateCalledService } from "../../services/chamados/CreateCalledService";
import * as Yup from "yup";
import { MinKey } from "typeorm";

class CreateCalledController { 
    async handle(req: Request, res: Response){
        const {  cod_chamado, cliente,telefone, descricao, technical_name, nota } = req.body;
        const createCalledService = new CreateCalledService();

        try{ 
            const data = { cod_chamado, cliente,telefone, descricao, technical_name, nota };

            const schema = Yup.object().shape({ 
                cod_chamado: Yup.string().required(),
                cliente: Yup.string().required().min(5),
                telefone:Yup.string().required().min(8),
                descricao: Yup.string().required().max(50),
                technical_name: Yup.string().required().min(4),
                nota: Yup.number().required()
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            const called = await createCalledService.execute( data );
            return res.status(201).json(called);
        }catch(e){ 
            return res.status(400).json({ errors: e.message});
        }
    }
}

export { CreateCalledController }