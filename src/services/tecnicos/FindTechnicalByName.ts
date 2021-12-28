import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

class FindTechnicalByNameService {
  async execute(name:string) {

    const tecnicoRepository = getCustomRepository(TecnicosRepositories);

    const tecnicos = await tecnicoRepository.find();

    for(let t of tecnicos){
        if(t.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
          const tecnico = t;
          return tecnico;
      }
    }
  }
}

export { FindTechnicalByNameService };
