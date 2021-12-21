import { Request, Response } from "express";
import { ListCalledByNameService } from "../../services/chamados/ListCalledByNameService"

class ListCalledByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    console.log({name})
    
    const listCalledByNameService = new ListCalledByNameService();

    const called = await listCalledByNameService.execute( {name} );

    return response.json(called);
  }
}

export { ListCalledByNameController };
