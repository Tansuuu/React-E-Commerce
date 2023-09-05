import axios, { AxiosError } from "axios";
import { Product } from "../models/Product";
import { ProductUpdate } from "../models/ProductUpdate";
import { Resource } from "../utils/Resource";
import LocalStorageService from "./LocalStorageService";
import { User } from "../models/User";

class ProductService {
  async getProducts(): Promise<Resource<Product[]>> {
    return axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then((response) => Resource.Success(response.data, "başarılı"))
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }

  async productBasketControl(
    userId,
    productId
  ): Promise<Resource<ProductUpdate[]>> {
    return axios
      .get<ProductUpdate[]>(
        `http://localhost:3000/productBaskets?productId=${productId}&userId=${userId}`
      )
      .then((response) => Resource.Success(response.data, "başarılı"))
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }

  async addToCard(item): Promise<Resource<ProductUpdate>> {
    return axios
      .post<ProductUpdate>("http://localhost:3000/productBaskets", {
        ...item,
        userId: LocalStorageService.getUser().id,
        count: 1,
      })
      .then((response) => {
        console.log(item);
        return Resource.Success(response.data, "success");
      })
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }

  async updateProductBasket(item): Promise<Resource<ProductUpdate>> {
    return axios
      .put<ProductUpdate>(
        `http://localhost:3000/productBaskets/${item.id}`,
        item
      )
      .then((response) => Resource.Success(response.data, "success"))
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }

  async getBasket(userId): Promise<Resource<ProductUpdate>> {
    return axios
      .get<ProductUpdate>(
        `http://localhost:3000/productBaskets?userId=${userId}`
      )

      .then((response) => Resource.Success(response.data, "success"))
      .catch((error: AxiosError) => {
        console.log("errorrr");
        console.log();

        return Resource.Error(`${error.response?.data}`);
      });
  }

  async deleteBasketProduct(item): Promise<Resource<ProductUpdate>> {
    return axios
      .delete<ProductUpdate>(
        `http://localHost:3000/productBaskets/${item.id}`,
        item
      )
      .then((response) => Resource.Success(response.data, "success"))
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }

  async getCategories(): Promise<Resource<String[]>> {
    return axios
      .get<String[]>("https://fakestoreapi.com/products/categories")
      .then((response) => Resource.Success(response.data, "success"))
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }

  async updateUserCount(item): Promise<Resource<User>> {
    return axios
      .put<User>(`http://localhost:3000/users/${item.id}`, item)
      .then((response) => Resource.Success(response.data, "success"))
      .catch((error: AxiosError) => Resource.Error(`${error.response?.data}`));
  }
}

export default new ProductService();
