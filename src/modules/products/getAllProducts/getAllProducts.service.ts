
import { injectable } from 'tsyringe';
import { client } from './../../../infra/prisma/client';
import { HttpError } from './../../../error/HttpError';

@injectable()
export class getAllProductsService{
    async execute(search:string){
        try{
        const products = client.products.findMany({
            where:{
                name:{
                    contains:search
                }
        }})

        return products
    }catch(err)
    {
        console.log(err)
        
        throw new HttpError("ocorreu um erro ao buscar todos ")
    }
    }
}