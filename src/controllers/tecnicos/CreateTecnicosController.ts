import { NextFunction, Request, Response } from "express";
import { CreateTechnicalService } from "../../services/tecnicos/CreateTechnicalService";
import { check, validationResult } from "express-validator"
class CreateTecnicoController { 
    async handle(req: Request, res: Response, next: NextFunction){
        const { name } = req.body;  
        try{
            if(typeof name !== 'string'){ 
                return res.status(400).json({ errors: "Data type is invalid"});
            } if(name.length <= 0 || name.length <=5){
                return res.status(400).json({ errors: "size of name is small"});
            }
            const createTecnicoService = new CreateTechnicalService();
            const tecnico = await createTecnicoService.execute({name});
            return res.status(201).json(tecnico); 
        }catch(e){ 
            return res.status(400).json({errors: e.message});
        }
    }
}

export { CreateTecnicoController }