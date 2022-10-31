import { IRequest } from "./dtos/IRequest";
import { HttpError } from './../../../error/HttpError';
import { client } from './../../../infra/prisma/client';



export class updateSalesByIdService{
    async execute({id, total_price, quantity}:IRequest){

        if(!id) throw new HttpError("digite o id")
        if(!total_price) throw new HttpError("digite o preco")
        if(!quantity) throw new HttpError("digite a quantidade")

        const sale = await client.sales.update({
            where:{
                id:id
            },
            data:{
                quantity:quantity,
                total_price:total_price
            }
        })

        return sale;
    }
}