import { getCustomRepository } from "typeorm";
import { ChamadosRepositories } from "../../repositories/ChamadosRepository";
import { FindTechnicalByNameService } from "../tecnicos/FindTechnicalByName"

interface ICalledRequest{ 
    cod_chamado: string;
    cliente:string;
    telefone: string;
    descricao: string;
    technical_name:string;
    nota: number;
}
class CreateCalledService{ 
    async execute({cod_chamado, cliente,technical_name, telefone, descricao, nota}: ICalledRequest){

        const findTechnicalByNameService = new FindTechnicalByNameService();

        const chamadosRepositories = getCustomRepository(ChamadosRepositories);

        const calledAlreadyExists = await chamadosRepositories.findOne({
            cod_chamado,
        });

        const technicalAlreadyExists = await findTechnicalByNameService.execute(technical_name);

        if(!technicalAlreadyExists){
            throw new Error("technical should be registered");
        }

        if (calledAlreadyExists) {
            throw new Error("Called already exists");
        }

        const technical_id = technicalAlreadyExists.id;
        
        const called = chamadosRepositories.create({ 
            cod_chamado,
            cliente,
            telefone,
            descricao,
            technical_id,
            nota
        });
        await chamadosRepositories.save(called);

        return called;
    }
}

export { CreateCalledService }