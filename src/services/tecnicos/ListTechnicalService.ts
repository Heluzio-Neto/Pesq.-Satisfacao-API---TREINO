import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

import { classToPlain } from "class-transformer";

class ListTecnicosService {
  async execute() {
    const tecnicoRepository = getCustomRepository(TecnicosRepositories);

    const tecnicos = await tecnicoRepository.find();

    return classToPlain(tecnicos);
  }
}

export { ListTecnicosService };
