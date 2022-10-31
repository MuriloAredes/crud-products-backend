
import { client } from './../../../infra/prisma/client';


export class getAllProductsService{
    async execute(){

        const products = client.products.groupBy({
            
            by:["id"],
            _count:{
                id:true
            }
            
            
               
            
        })
    }
}