import { NextFunction, Request, Response } from "express";
import { CreateTechnicalService } from "../../services/tecnicos/CreateTechnicalService";
import * as Yup from "yup"

class CreateTecnicoController { 
    async handle(req: Request, res: Response, next: NextFunction){
        const { name, email } = req.body;  

        const createTechnicalService = new CreateTechnicalService();
        try{
            const data = { name, email }
            const schema = Yup.object().shape({ 
                name: Yup.string().required().min(5),
                email: Yup.string().email().required()
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            const tecnico = await createTechnicalService.execute(data);

            return res.status(201).json(tecnico); 
        }catch(e){ 
            return res.status(400).json({errors: e.message});
        }
    }
}

export { CreateTecnicoController }