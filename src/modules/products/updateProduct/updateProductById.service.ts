import { injectable } from "tsyringe";
import { HttpError } from "../../../error/HttpError";
import { client } from "../../../infra/prisma/client";

@injectable()
export class updateProductByIdService{
    async execute({id,code,name,price,quantity}: IRequest)
    {   try{
        const checkHasProduct = await client.products.findUnique({where:{id:id}});

        if(!checkHasProduct)throw new HttpError("produto inexistente"); 

        const product = await client.products.update({
            where:{
                id:id
            },
            data:{
                code:!code? checkHasProduct.code:code,
                name:!name? checkHasProduct.name:name, 
                price:!price? checkHasProduct.price:price,
                quantity:!quantity?checkHasProduct.quantity:quantity
            }
        })

        return product
    }catch(err){
        console.log(err)
        throw new HttpError("ocorreu um erro ao editar produto")
    }
    }
}