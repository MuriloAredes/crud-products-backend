
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getAllProductsService } from './../getAllProducts/getAllProducts.service';

export class getAllProductController{
    async handler(request:Request, response:Response){
        const{search} = request.body;

        const service = container.resolve(getAllProductsService);
        const result= await service.execute(search)

        return response.json(result);
    }
}