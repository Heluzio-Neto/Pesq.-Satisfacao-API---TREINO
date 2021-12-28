import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

class FindTechnicalByIdService {
  async execute(id : string) {
    const tecnicoRepository = getCustomRepository(TecnicosRepositories);

    const technical = await tecnicoRepository.findOne({ 
        id
    });

    return technical;
  }
}

export { FindTechnicalByIdService };
