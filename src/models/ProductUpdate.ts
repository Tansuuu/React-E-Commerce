import { Product } from "./Product";
import { Rating } from "./Rating";

export class ProductUpdate {
  id: number;
  title: String;
  price: number;
  description: String;
  category: String;
  image: String;
  rating: Rating;
  count: number;
  productId: number;
  userId: String;

  parseProduct(product: Product): ProductUpdate {
    var productUpdate = new ProductUpdate();
    productUpdate.title = product.title;
    productUpdate.productId = product.id;
    productUpdate.price = product.price;
    productUpdate.description = product.description;
    productUpdate.category = product.category;
    productUpdate.image = product.image;
    productUpdate.rating = product.rating;
    // productUpdate.count = product
    // productUpdate.userId =

    return productUpdate;
  }
}
