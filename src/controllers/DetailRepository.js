import Utils from "../utils/Utils";
import LocalStorageService from "../services/LocalStorageService";
import ProductService from "../services/ProductService";
import SwalHelper from "../helpers/SwalHelper";
import BasketHelper from "../helpers/BasketHelper";

class DetailRepository {
  async addProduct(item) {
    if (Utils.loginPopup()) {
      // const response = await ProductService.addToCard(item);
      const user = LocalStorageService.getUser();
      //   console.log(user.id);
      //   return;
      const response = await ProductService.productBasketControl(
        user.id,
        item.id
      );
      if (response.length == 0) {
        // const product = {
        //     ...item,
        //     count: updateProductResponse[0].count + 1,
        //   };
        // console.log("Sepete Ekleyeceğim");
        SwalHelper.cornerPopUp("success", "Ürün Sepete Eklendi");
        item.productId = item.id;
        delete item.id;
        await ProductService.addToCard(item);
        Utils.refreshPage();
      } else {
        // console.log("ELSE");
        // Sepeti Güncelle
        // console.log("Sepeti Güncelleyeceğim");
        const updateProductResponse = await ProductService.productBasketControl(
          user.id,
          item.id
        );
        const updatedProduct = {
          ...updateProductResponse[0],
          count: updateProductResponse[0].count + 1,
        };
        // console.log("response product");
        // console.log(updateProductResponse);
        // console.log("my json");
        // console.log(updatedProduct);
        // console.log("güncellencek basket product id ");
        // console.log(updatedProduct.id);
        // return;
        await ProductService.updateProductBasket(updatedProduct);
        BasketHelper.addProductToBasket({
          ...updatedProduct,
          count: 1,
        });
      }

      SwalHelper.cornerPopUp("success", "Ürün Sepete Eklendi");
    }
  }
}

export default new DetailRepository();
