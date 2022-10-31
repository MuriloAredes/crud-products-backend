import { Response, Request } from "express";
import { container } from "tsyringe";
import { getSalesByIdService } from "./getSalesById.service";

export class getSaleByIdController {
  async handler(request: Request, response: Response) {
    const { id } = request.params;

    const service = container.resolve(getSalesByIdService);

    const result = service.execute(Number(id));

    return response.json({
      success: true,
      body: result,
    });
  }
}
