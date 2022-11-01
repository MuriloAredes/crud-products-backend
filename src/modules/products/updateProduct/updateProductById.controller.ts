import { Request, Response } from "express";
import { container } from 'tsyringe';
import { updateProductByIdService } from "./updateProductById.service";


export class updateProductByIdController{
    async handler(request:Request, response:Response){

        const{id} = request.params
        const{code ,name, price ,quantity} = request.body

       const service = container.resolve(updateProductByIdService)
        service.execute({
        id:Number(id),
        code:code,
        name:name,
        price:Number(price),
        quantity:quantity
       })

       return response.json({
        success: true,
        body: "atualizado com sucesso!",
      });
    }
}