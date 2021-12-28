import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

interface ITecnicoRequest{ 
    name: string;
    email: string;
}
class CreateTechnicalService{ 
    async execute({name, email}: ITecnicoRequest){
        const technicalRepository = getCustomRepository(TecnicosRepositories);

        const userAlreadyExists = await technicalRepository.findOne({
            name
        });

        if (userAlreadyExists) {
            throw new Error("Technical already exists");
        }
        
        const technical = technicalRepository.create({ 
            name,
            email
        });
        await technicalRepository.save(technical);
        
        return technical;
    }
}

export { CreateTechnicalService }