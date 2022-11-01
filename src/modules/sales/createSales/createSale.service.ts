import { IRequest } from "./dtos/IRequest";
import { HttpError } from "./../../../error/HttpError";
import { client } from "./../../../infra/prisma/client";
import { injectable } from "tsyringe";

@injectable()
export class createSaleService {
  async execute({ product_id, quantity }: IRequest) {
    try {
      if (!product_id) throw new HttpError("digite o product id");
      if (!quantity || quantity < 0)
        throw new HttpError("quantidade null , ou menor que 1");

      const checkHasProduct = await client.products.findUnique({
        where: { id: product_id },
      });

      if (!checkHasProduct) throw new HttpError("product inexistente");

      if (quantity > checkHasProduct.quantity)
        throw new HttpError("Quantidade insulficiente em estoque");

      const totalprice = quantity * checkHasProduct.price;
       
     
      
      const quantityProd = checkHasProduct.quantity - quantity ;
      console.log(quantityProd )
      await client.products.update({
        where: {
          id: checkHasProduct.id,
        },
        data: {
          quantity: quantityProd,
        },
      });

      const sales = await client.sales.create({
        data: {
          product_id: product_id,
          quantity: quantity,
          total_price: totalprice,
        },
      });

      return sales;
    } catch (err) {
      console.log(err);

      throw new HttpError("Erro não foi possivel efetuar a venda ! :/");
    }
  }
}
