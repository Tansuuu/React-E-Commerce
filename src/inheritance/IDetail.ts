import { Product } from "../models/Product";

export interface IDetail {
  addProduct(item: Product): Promise<void>;
}
