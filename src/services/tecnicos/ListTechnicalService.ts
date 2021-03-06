import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

class ListTecnicosService {
  async execute() {
    const tecnicoRepository = getCustomRepository(TecnicosRepositories);

    const tecnicos = await tecnicoRepository.find();

    return tecnicos;
  }
}

export { ListTecnicosService };
