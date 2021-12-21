import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"
import { ListCalledByTechnicalService } from "./ListCalledByTechnicalService";

interface ITecnicoRequest{ 
    name: string;
}

class ListCalledByNameService {
  async execute({name}: ITecnicoRequest ) {
    const listCalledByTechnicalService = new ListCalledByTechnicalService();

    const tecnicoRepository = getCustomRepository(TecnicosRepositories);

    const tecnicos = await tecnicoRepository.find();

    for(let t of tecnicos){
        if(t.name.includes(name)){
          const tecnico = await listCalledByTechnicalService.execute( t.id );
          return tecnico;
      }
    } 
  }
}

export { ListCalledByNameService };
