import { Request, response, Response } from "express";
import {container} from "tsyringe"
import { createProductService } from "./createProduct.service";



 interface Product{
    code :string;
    dataVenda:Date;
    quantidade:number;
}
export class createProductController{
    async handler(request:Request, respose:Response){
       // const{code, name, price, quantity} = request.body;
       const file = request.file

       const createProduct = container.resolve(createProductService);
     //   const result  = await createProduct.execute()
        
        return response.json(createProduct);
        
    }
}