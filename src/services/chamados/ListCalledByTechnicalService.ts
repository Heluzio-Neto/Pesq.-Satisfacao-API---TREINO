import { getCustomRepository } from "typeorm";
import { ChamadosRepositories } from "../../repositories/ChamadosRepository"

class ListCalledByTechnicalService {
  async execute(id: string) {
    const chamadosRepositories = getCustomRepository(ChamadosRepositories);
    
    const called = await chamadosRepositories.find({
      where:{ technical_id: id},
      relations:["technicalIdentification"]
    });
    return called;
  }
}

export { ListCalledByTechnicalService };
