import { Router } from "express";
import { productRoutes } from "./product.routes";
import { salesRoutes } from "./sales.routes";

const indexRoutes = Router();

indexRoutes.use("/product", productRoutes);
indexRoutes.use("/sales", salesRoutes);

export { indexRoutes };
