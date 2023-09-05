import { ProductUpdate } from "../models/ProductUpdate";
import { Resource } from "../utils/Resource";

export interface IBasket {
  basket(): Promise<Resource<ProductUpdate>>;
  deleteItemFromBasket(item): Promise<void>;
  clearBasket(): void;
  updateUserCount(userCount: number): void;
}
