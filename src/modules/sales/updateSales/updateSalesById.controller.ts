import { Request, Response } from "express";
import { container } from "tsyringe";
import { updateSalesByIdService } from "./updateSalesById.service";

export class updateSalesByIdController {
  async handler(request: Request, response: Response) {
    const { id } = request.params;

    const { total_price, quantity } = request.body;

    const service = container.resolve(updateSalesByIdService);

    await service.execute({
      id: Number(id),
      total_price: Number(total_price),
      quantity: Number(quantity),
    });

    return response.json({
      success: true,
      body: "atualizado com sucesso!",
    });
  }
}
