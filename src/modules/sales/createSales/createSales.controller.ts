import { Request, Response } from "express";
import { container } from "tsyringe";
import { createSaleService } from "./createSale.service";

export class createSalesController {
  async handler(request: Request, response: Response) {
    
    const { product_id, quantity } = request.query;

    console.log(product_id,quantity)
    const createSale = container.resolve(createSaleService);
    const result = await createSale.execute({
      product_id: Number(product_id),
      quantity: Number(quantity),
    });

    return response.json({
      success: true,
      body: result,
    });
  }
}
