import BasketHelper from "../helpers/BasketHelper";
import { IBasket } from "../inheritance/IBasket";
import { ILocalStorage } from "../inheritance/ILocalStorage";
import { ProductUpdate } from "../models/ProductUpdate";
import AuthService from "../services/AuthService";
import ProductService from "../services/ProductService";
import { Resource, Status } from "../utils/Resource";

class BasketController extends ILocalStorage implements IBasket {
  user = this.getUser();
  async basket(): Promise<Resource<ProductUpdate>> {
    // console.log(this.user?.id ?? 0);
    const response = await ProductService.getBasket(this.user?.id ?? 0);
    if (response.status == Status.SUCCESS) {
      BasketHelper.setBasket(response);
    }

    return response;
  }

  async deleteItemFromBasket(item): Promise<void> {
    await ProductService.deleteBasketProduct(item);
    BasketHelper.deleteFromBasket(item?.id);
  }

  clearBasket(): void {
    BasketHelper.setBasket(undefined);
  }

  updateUserCount(userCount: number): void {
    const updatedUser = {
      ...this.user,
      money: userCount.toFixed(2),
    };
    AuthService.updateUser(updatedUser);
  }
}

export default new BasketController();
