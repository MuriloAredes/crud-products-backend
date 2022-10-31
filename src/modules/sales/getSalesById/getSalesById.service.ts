
import { injectable } from 'tsyringe';
import { HttpError } from './../../../error/HttpError';
import { client } from './../../../infra/prisma/client';

@injectable()
export class getSalesByIdService{
    async execute(id:number){
        try{
        if(!id)throw new HttpError("digite o id")

        const sale = await client.sales.findUnique({where:{id:id}})

        return sale
        }catch(err){
            console.log(err);

            throw new HttpError("ocorreu um erro ao buscar venda")
        }
    }
}