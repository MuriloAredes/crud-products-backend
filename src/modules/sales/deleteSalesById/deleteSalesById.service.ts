import { HttpError } from "../../../error/HttpError";
import { client } from "../../../infra/prisma/client";


export class deleteSalesByIdServices{
    async execute(id:number){

        try{
          if (!id) throw new HttpError("digite o id");

          const deleteSale = await client.sales.delete({ where: { id: id } });

          return deleteSale;
        }catch(err){
            console.log(err)
            throw new HttpError("ocorreu um erro ao excluir vendas")
        }
    }
}