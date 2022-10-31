
import { Router } from 'express';
import { createProductController } from './../modules/products/createProduct/createProduct.controller';


const productRoutes = Router();


//Register Product witch 
productRoutes.post("/register", new createProductController().handler)

export{productRoutes};