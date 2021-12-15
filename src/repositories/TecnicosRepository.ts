import { EntityRepository, Repository } from "typeorm";
import { Tecnicos } from "../entities/Tecnicos";

@EntityRepository(Tecnicos)
class TecnicosRepositories extends Repository<Tecnicos> {}

export { TecnicosRepositories };
