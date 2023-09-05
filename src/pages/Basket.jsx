import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalStorageService from "../services/LocalStorageService";
import { Link } from "react-router-dom";
import SwalHelper from "../helpers/SwalHelper";
import BasketHelper from "../helpers/BasketHelper";
import ProductService from "../services/ProductService";
import { Resource, Status } from "../utils/Resource";
import BasketController from "../controllers/BasketController";

export default function Basket() {
  const [basket, setBasket] = useState();
  const [basketCount, setBasketCount] = useState(
    parseFloat(BasketHelper.getCount())
  );
  const [userCount, setUserCount] = useState(
    0.0 || LocalStorageService.getUser()?.money
  );

  useEffect(() => {
    getBasket();
  }, []);

  async function getBasket() {
    const basket = await BasketController.basket();
    if (basket.status == Status.SUCCESS) {
      setBasket(basket);
      setBasketCount(parseFloat(BasketHelper.getCount()));
      setUserCount(parseFloat(userCount));
    } else {
      SwalHelper.cornerPopUp("error", "Ürünler görüntülenemiyor!");
    }
  }

  async function handleClick(item) {
    SwalHelper.confirmPopUp(
      "Ürünü Sepetten Çıkar",
      "Onaylıyor musun?",
      async () => {
        await BasketController.deleteItemFromBasket(item);
        await getBasket();
      }
    );
    // await ProductService.deleteBasketProduct(item);
  }
  // console.log(userCount);
  // console.log(basketCount);
  function confirmClick() {
    if (LocalStorageService.getUser() === null) {
      SwalHelper.cornerPopUp("warning", "Giriş yapınız");
    } else {
      console.log(`basket count : ${typeof basketCount}`);
      console.log(`user count : ${typeof userCount}`);
      // basketCount = parseFloat(basketCount);
      // userCount = parseFloat(userCount);
      if (basketCount === parseFloat("0.00")) {
        SwalHelper.cornerPopUp("warning", "Sepette ürün bulunmuyor!");
      } else if (basketCount <= userCount) {
        SwalHelper.confirmPopUp("Sepeti Onayla", "Emin misiniz?", async () => {
          setBasket(
            basket?.data.map(
              async (item) => await ProductService.deleteBasketProduct(item)
            )
          );
          setBasket(Resource.Success([]));
          setBasketCount(0);
          setUserCount(userCount - basketCount);
          BasketController.updateUserCount(userCount - basketCount);
          BasketController.clearBasket();
        });
      } else {
        SwalHelper.cornerPopUp("error", "Bakiye yetersiz");
      }
    }
  }

  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <div className="d-flex justify-content-between">
          <h2>SHOPPING CART</h2>
          <h5>Bakiyeniz: {userCount} $</h5>
        </div>
        <hr />
        <div className="product-animation">
          {LocalStorageService.getUser() === null ? (
            <h5 className="my-5 py-5">
              Sepetinizi görüntülemek için
              <Link to="/login"> giriş yapınız.</Link>
            </h5>
          ) : basket === undefined || basket?.data.length === 0 ? (
            <h5 className="my-5 py-5">Sepetinizde ürün bulunmuyor!</h5>
          ) : (
            basket?.data.map((item) => {
              return (
                <div key={item.id} className="row justify-content-between my-5">
                  <div className="col-sm-3">
                    <img src={item.image} className="w-100 basket-img" />
                  </div>
                  <div className="col-sm-6 mt-5">
                    <h5>{item.title}</h5>
                    <p>{item.category}</p>
                    <p>
                      {item.count} x $ {item.price}
                    </p>
                  </div>
                  <div className="col-sm-1 mt-5">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleClick(item)}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h4>Toplam Tutar: {basketCount} $</h4>
          <button className="detail-btn" onClick={confirmClick}>
            Sepeti Onayla
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
