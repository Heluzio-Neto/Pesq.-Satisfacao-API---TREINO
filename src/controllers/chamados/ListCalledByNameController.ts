import { Request, Response } from "express";
import { ListCalledByNameService } from "../../services/chamados/ListCalledByNameService"

class listCalledByNameController {
  async handle(request: Request, response: Response) {
    const name = request.body;

    const listCalledByNameService = new ListCalledByNameService();

    const called = await listCalledByNameService.execute( name );

    return response.json(called);
  }
}

export { listCalledByNameController };
