import { Request,  Response } from "express";
import {container} from "tsyringe"
import { createProductService } from "./createProduct.service";
import { converterCsv } from "../../../utils/converterCsv";
import { IProduct } from "./dtos/IRequest";


export class createProductController {
  async handler(request: Request, response: Response) {
    const buffer = request.file?.buffer;
    
    const productLine = new converterCsv().execute(buffer);

    const products = new Set<IProduct>();

    if (productLine) { 

      for await (let line of productLine) {
        
        const prodLineSplit = line.split(";");

        products.add({
          code: prodLineSplit[0],
          name: prodLineSplit[1],
          quantity: Number(prodLineSplit[2]),
          price: Number(prodLineSplit[3]),
          date: new Date(prodLineSplit[4]),
        });
      }
      const convertSetToArray = Array.from(products)
     const service = container.resolve(createProductService);
      await service.execute({ products: convertSetToArray});
  
      
      
    }


    return response.json({
      success: true,
      body: products,
    });
  }
}