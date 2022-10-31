import { injectable } from "tsyringe";
import { IRequest } from "./dtos/IRequest";
import { HttpError } from "./../../../error/HttpError";
import { client } from "./../../../infra/prisma/client";

@injectable()
export class createProductService {
  async execute({ code, name, price, quantity }: IRequest) {
    try {
      if (!code) throw new HttpError("preencha o campo code bar");
      if (!name) throw new HttpError("preencha o campo  nome ");
      if (!price) throw new HttpError("o preencha o campo preço");
      if (!quantity) throw new HttpError("preencha o campo quantidade");

      // const checkHasName = await client.products.findUnique({where:{}})
      
      const result = await client.products.create({
        data:{
          code:code,
          name:name,
          price:price,
          quantity:quantity

        }
      });

      return result;
    } catch (err) {
      console.log(err);

      throw new HttpError("Erro não foi possivel efetuar o cadastro de produto!");
    }
  }
}
