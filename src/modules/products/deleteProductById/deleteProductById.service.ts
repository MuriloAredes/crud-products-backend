import { injectable } from "tsyringe";
import { HttpError } from "../../../error/HttpError";
import { client } from "../../../infra/prisma/client";

@injectable()
export class deleteProductByIdService{
    async execute(id:number){
        try{
            if(!id || id === 0) throw new HttpError("digite o id")

            const product = await client.products.delete({where:{id:id}})
            
            return product;
    }catch(err){
            console.log(err)
            throw new HttpError("ocorreu um erro ao deletar produto")
        }
    }
}