import { injectable } from "tsyringe";
import { IRequest } from "./dtos/IRequest";
import { HttpError } from "./../../../error/HttpError";
import { client } from "./../../../infra/prisma/client";

@injectable()
export class createProductService {
  async execute({ products}: IRequest) {
    try {
      
      if (products.length === 0) throw new HttpError("arquivo vazio");

      const prod = products.slice(1)
      for await (let{code,name, date,quantity, price} of prod){
     
        
        await client.products.create({
          data: {
            code: code,
            name: name,
            quantity: Number(quantity),
            createdAt: new Date(date),
            price: price,
          },
          
        });

      }
     
      
    } catch (err) {
      console.log(err);

      throw new HttpError("Erro não foi possivel efetuar o cadastro de produto!");
    }
  }
}
