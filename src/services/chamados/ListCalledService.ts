import { getCustomRepository } from "typeorm";
import { ChamadosRepositories } from "../../repositories/ChamadosRepository"

import { classToPlain } from "class-transformer";

class ListCalledService {
  async execute() {
    const chamadosRepository = getCustomRepository(ChamadosRepositories);

    const called = await chamadosRepository.find();

    return classToPlain(called);
  }
}

export  { ListCalledService };
