
import { Router } from 'express';
import multer from 'multer';
import { createProductController } from './../modules/products/createProduct/createProduct.controller';
import { updateProductByIdController } from './../modules/products/updateProduct/updateProductById.controller';
import { getProductByIdController } from './../modules/products/getProductById/getProductById.controller';
import { deleteProductByIdController } from './../modules/products/deleteProductById/deleteProductById.controller';
import { getAllProductController } from './../modules/products/getAllProducts/getAllProducts.controller';


const uploadConfig = multer()

const productRoutes = Router();


//Register Product witch 
productRoutes.post("/register", uploadConfig.single("file"),new createProductController().handler)

//update product
productRoutes.put("/:id", new updateProductByIdController().handler)

//get by id product
productRoutes.get("/:id", new getProductByIdController().handler)

//get all product
productRoutes.get("/", new getAllProductController().handler)

//deleteProduct
productRoutes.delete("/:id", new deleteProductByIdController().handler)

export{productRoutes};