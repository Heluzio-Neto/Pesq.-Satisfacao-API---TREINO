import { EntityRepository, Repository } from "typeorm";
import { Chamados } from "../entities/Chamados";

@EntityRepository(Chamados)
class ChamadosRepositories extends Repository<Chamados> {}

export { ChamadosRepositories };
