import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

interface ITecnicoRequest{ 
    name: string;
}

class CreateTecnicosService{ 
    async execute({name}: ITecnicoRequest){
        const tecnicoRepository = getCustomRepository(TecnicosRepositories);

        const userAlreadyExists = await tecnicoRepository.findOne({
            name,
        });
          
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const tecnico = tecnicoRepository.create({ 
            name
        });

        await tecnicoRepository.save(tecnico);

        return tecnico;
    }
}

export { CreateTecnicosService }