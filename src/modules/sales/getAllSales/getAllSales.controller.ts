import { Request, Response } from "express";
import { container } from "tsyringe";
import { getAllSalesService } from './getAllSales.service';


export class getAllSalesController{
    async handler(request:Request, response:Response){

        const service = container.resolve(getAllSalesService);
        const result = await service.execute()

        return response.json(result)
    }
}