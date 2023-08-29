import BasketHelper from "../helpers/BasketHelper";
import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";
import ProductService from "../services/ProductService";

class BasketRepository {
  user = LocalStorageService.getUser();
  async basket() {
    // console.log(this.user?.id ?? 0);
    const response = await ProductService.getBasket(this.user?.id ?? 0);
    BasketHelper.setBasket(response);
    return response;
  }

  async deleteItemFromBasket(item) {
    await ProductService.deleteBasketProduct(item);
    BasketHelper.deleteFromBasket(item?.id);
  }

  clearBasket() {
    BasketHelper.setBasket(undefined);
  }

  updateUserCount(userCount) {
    const updatedUser = {
      ...this.user,
      money: userCount,
    };
    AuthService.updateUser(updatedUser);
  }
}

export default new BasketRepository();
