import 'reflect-metadata'
import  express  from "express";
import {indexRoutes} from "./routes/index.routes"


const app = express();

app.use(indexRoutes);


app.listen(3333, ()=> console.log("server is running "))

