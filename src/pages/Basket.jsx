import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasketRepository from "../repositories/BasketRepository";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalStorageService from "../services/LocalStorageService";
import { Link } from "react-router-dom";
import SwalHelper from "../helpers/SwalHelper";
import BasketHelper from "../helpers/BasketHelper";
import ProductService from "../services/ProductService";

export default function Basket() {
  const [basket, setBasket] = useState();
  const [basketCount, setBasketCount] = useState(BasketHelper.getCount());
  const [userCount, setUserCount] = useState(
    0.0 || LocalStorageService.getUser()?.money
  );

  // const [basketData, setBasketData] = useState();

  useEffect(() => {
    getBasket();
  }, []);

  async function getBasket() {
    const basket = await BasketRepository.basket();
    setBasket(basket);
  }

  async function handleClick(item) {
    // console.log(item.id);
    SwalHelper.confirmPopUp(
      "Ürünü Sepetten Çıkar",
      "Onaylıyor musun?",
      async () => {
        await BasketRepository.deleteItemFromBasket(item);
        await getBasket();
      }
    );
    // await ProductService.deleteBasketProduct(item);
  }

  function confirmClick() {
    if (LocalStorageService.getUser() === null) {
      SwalHelper.cornerPopUp("warning", "Giriş yapınız");
    } else {
      if (basketCount <= userCount) {
        console.log("sepeti sil");
        setBasket(
          basket?.map(
            async (item) => await ProductService.deleteBasketProducts(item)
          )
        );
        console.log(basket);
        setBasket([]);
        setBasketCount(0);
        setUserCount(userCount - basketCount);
        BasketRepository.updateUserCount(userCount - basketCount);
        BasketRepository.clearBasket();
      } else {
        console.log("tutar arttır");
      }
    }
  }

  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <div className="d-flex justify-content-between">
          <h2>SHOPPING CART</h2>
          <h5>Bakiyeniz: {userCount?.toFixed(2)} $</h5>
        </div>
        <hr />
        <div className="product-animation">
          {LocalStorageService.getUser() === null ? (
            <h5 className="my-5 py-5">
              Sepetinizi görüntülemek için{" "}
              <Link to="/login">giriş yapınız.</Link>
            </h5>
          ) : basket?.length === 0 ? (
            <h5 className="my-5 py-5">Sepetinizde ürün bulunmuyor!</h5>
          ) : (
            basket?.map((item) => {
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
