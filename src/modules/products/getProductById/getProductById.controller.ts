
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { getProductByIdService } from './getProductById.service';

export class getProductByIdController{
    async handler(request:Request,response:Response){
        const{id} = request.params

        const service =container.resolve(getProductByIdService);
        const result = await service.execute(Number(id));

        return response.json(result);
    }
}