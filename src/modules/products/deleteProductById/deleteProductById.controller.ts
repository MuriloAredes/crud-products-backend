import { Request, Response } from "express";
import { container } from 'tsyringe';
import { deleteProductByIdService } from './deleteProductById.service';




export class deleteProductByIdController{
    async handler(request:Request, response:Response){
        const {id} = request.params

        const service = container.resolve(deleteProductByIdService);
        await service.execute(Number(id))

        return response.json({
          success: true,
          message: "deletado com sucesso!",
        });
    }
}