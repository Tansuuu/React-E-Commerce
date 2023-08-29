import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailRepository from "../repositories/DetailRepository";

export default function Detail() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const location = useLocation();
  const { from } = location.state;

  async function handleClick(item) {
    await DetailRepository.addProduct(item);
    forceUpdate();
  }

  return (
    <>
      <Header />
      <div className="container-fluid py-5 bg-blue">
        <div className="row gap-5 mt-5 justify-content-center">
          <div className="col-sm-5 bg-white">
            <img
              className="w-100 detail-image"
              src={from.image}
              alt="product"
            />
          </div>
          <div className="col-sm-5 detail">
            <h5>{from.category}</h5>
            <h2 className="mt-3">{from.title}</h2>
            <h6 className="mt-3">$ {from.price}</h6>
            <p className="mt-3">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit sed.
            </p>
            <button
              onClick={() => handleClick(from)}
              className="detail-btn mt-5"
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
