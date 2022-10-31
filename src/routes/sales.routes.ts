import  multer  from 'multer';
import { Router } from 'express';
import { createSalesController } from './../modules/sales/createSales/createSales.controller';
import { getSaleByIdController } from './../modules/sales/getSalesById/getSalesById.controller';
import { updateSalesByIdController } from './../modules/sales/updateSales/updateSalesById.controller';


const salesRoutes = Router();

salesRoutes.post("/register", new createSalesController().handler)

salesRoutes.get("/:id", new getSaleByIdController().handler)

salesRoutes.put("/:id", new updateSalesByIdController().handler)



export{salesRoutes};