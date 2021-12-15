import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const tecnicoRepository = getCustomRepository(TecnicosRepositories);

    const tecnicos = await tecnicoRepository.find();

    return classToPlain(tecnicos);
  }
}

export { ListUserService };
