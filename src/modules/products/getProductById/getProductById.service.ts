import { injectable } from "tsyringe";
import { HttpError } from "../../../error/HttpError";
import { client } from "../../../infra/prisma/client";

@injectable()
export class getProductByIdService {
  async execute(id:number) {
    try {
      if (!id) throw new HttpError("digite o id ");

      const product = await client.products.findUnique({ where: { id: id } });

      return product;
    } catch (err) {
      console.log(err);
      throw new HttpError("ocorreu um erro ao editar produto");
    }
  }
}