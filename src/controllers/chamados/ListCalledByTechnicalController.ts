import { Request, Response } from "express";
import { ListCalledByTechnicalService } from "../../services/chamados/ListCalledByTechnicalService"

class ListCalledByTechnicalController {
  async handle(request: Request, response: Response) {
    const id = request.params.id ;

    const listCalledByTechnicalService = new ListCalledByTechnicalService();

    const called = await listCalledByTechnicalService.execute( id );

    return response.json(called);
  }
}

export { ListCalledByTechnicalController };
