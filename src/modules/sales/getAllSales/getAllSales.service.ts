
import { HttpError } from './../../../error/HttpError';
import { client } from './../../../infra/prisma/client';

export class getAllSalesService{
    async execute(){

    try{
        const getAll = await client.sales.findMany({
            orderBy:{
                quantity:"desc"
            },
            include:{
                products:{
                    select:{
                        name:true
                    }
                }
            },
            
            take:10

        })

        return getAll
    }catch(err){
        console.log(err)
        throw new HttpError("ocorreu um ao buscar todas as vendas")
    }
    }
}