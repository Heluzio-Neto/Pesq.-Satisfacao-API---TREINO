import { getCustomRepository } from "typeorm";
import { ChamadosRepositories } from "../../repositories/ChamadosRepository"

interface ICalledRequest{ 
    cod_chamado: string;
    cliente:string;
    technical_id:string;
    nota: number;
}
class CreateCalledService{ 
    async execute({cod_chamado, cliente,technical_id, nota}: ICalledRequest){

        const chamadosRepositories = getCustomRepository(ChamadosRepositories);
        const calledAlreadyExists = await chamadosRepositories.findOne({
            cod_chamado,
        });

        if (calledAlreadyExists) {
            throw new Error("Called already exists");
        }
        const called = chamadosRepositories.create({ 
            cod_chamado,
            cliente,
            technical_id,
            nota
        });
        await chamadosRepositories.save(called);

        return called;
    }
}

export { CreateCalledService }