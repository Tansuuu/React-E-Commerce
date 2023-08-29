import { Product } from "../models/Product";

export interface IExample{
    getProducts() : Promise<Product[]>;
}