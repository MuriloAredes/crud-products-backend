import  multer  from 'multer';
import { Router } from 'express';
import { createSalesController } from './../modules/sales/createSales/createSales.controller';
import { getSaleByIdController } from './../modules/sales/getSalesById/getSalesById.controller';
import { updateSalesByIdController } from './../modules/sales/updateSales/updateSalesById.controller';
import { deleteSalesByIdController } from './../modules/sales/deleteSalesById/deleteSalesById.controller';


const salesRoutes = Router();

//create
salesRoutes.post("/register", new createSalesController().handler)

//getById
salesRoutes.get("/:id", new getSaleByIdController().handler)

//update
salesRoutes.put("/:id", new updateSalesByIdController().handler)

//delete by id
salesRoutes.delete("/:id", new deleteSalesByIdController().handler)

export{salesRoutes};