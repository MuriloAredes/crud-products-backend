
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { deleteSalesByIdServices } from './deleteSalesById.service';

export class deleteSalesByIdController{
    async handler(request:Request, response:Response){
        const{id}= request.params

        const deleteSale = container.resolve(deleteSalesByIdServices);
        const result = await deleteSale.execute(Number(id))

        return response.json({
            success: true,
            body: "id:"+id+"\n deletado com sucesso!",
          });
    }
}