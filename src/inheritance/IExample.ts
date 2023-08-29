import { Product } from "../models/Product";
import ExampleService from "../services/ExampleService";

export interface IExample{
    getProducts() : Promise<Product[]>;
}