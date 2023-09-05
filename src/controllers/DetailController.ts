import Utils from "../utils/Utils";
import LocalStorageService from "../services/LocalStorageService";
import ProductService from "../services/ProductService";
import SwalHelper from "../helpers/SwalHelper";
import BasketHelper from "../helpers/BasketHelper";
import { Status } from "../utils/Resource";
import { Product } from "../models/Product";
import { ProductUpdate } from "../models/ProductUpdate";
import { IDetail } from "../inheritance/IDetail";
import { ILocalStorage } from "../inheritance/ILocalStorage";

class DetailController extends ILocalStorage implements IDetail {
  async addProduct(item: Product) {
    if (Utils.loginPopup()) {
      // const response = await ProductService.addToCard(item);
      const user = this.getUser();
      // console.log(user.id);
      //   return;
      const response = await ProductService.productBasketControl(
        user.id,
        item.id
      );
      // console.log(response.data.length);
      // response.data.

      if (response.data?.length == 0) {
        // const product = {
        //     ...item,
        //     count: updateProductResponse[0].count + 1,
        //   };
        // console.log("Sepete Ekleyeceğim");
        SwalHelper.cornerPopUp("success", "Ürün Sepete Eklendi");
        var newItem: ProductUpdate = new ProductUpdate();
        newItem = newItem.parseProduct(item);
        // console.log(newItem);
        // return;

        // newItem.userId = user.id;
        // item.productId = item.id;
        // delete item.id;
        await ProductService.addToCard(newItem);
        Utils.refreshPage();
      } else {
        // console.log("ELSE");
        // Sepeti Güncelle
        // console.log("Sepeti Güncelleyeceğim");
        const updateProductResponse = await ProductService.productBasketControl(
          user.id,
          item.id
        );

        if (updateProductResponse.status == Status.SUCCESS) {
          const updatedProduct = {
            ...updateProductResponse.data![0],
            count: updateProductResponse.data![0].count + 1,
          };
          await ProductService.updateProductBasket(updatedProduct);
          BasketHelper.addProductToBasket({
            ...updatedProduct,
            count: 1,
          });
        }

        // console.log("response product");
        // console.log(updateProductResponse);
        // console.log("my json");
        // console.log(updatedProduct);
        // console.log("güncellencek basket product id ");
        // console.log(updatedProduct.id);
        // return;
      }

      SwalHelper.cornerPopUp("success", "Ürün Sepete Eklendi");
    }
  }
}

export default new DetailController();
