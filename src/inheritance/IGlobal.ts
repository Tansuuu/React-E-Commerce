import { Product } from "../models/Product";
import ExampleService from "../services/ExampleService";

export abstract class IGlobal{
    async getGlobals() : Promise<Product[]>{
        return await ExampleService.getProducts();
    }
}