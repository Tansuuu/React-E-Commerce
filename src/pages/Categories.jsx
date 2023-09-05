import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductService from "../services/ProductService";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Categories() {
  const location = useLocation();
  const { from } = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  async function getDatas() {
    const product = (await ProductService.getProducts()).data;
    setData(product);
  }

  const categoryProduct = data.filter((data) => data.category === from);
  return (
    <>
      <Header />
      <div className="container my-5 py-5">
        <h1>{from.toUpperCase()}</h1>
        <p className="my-4">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit sed ut.
        </p>
        <p>{categoryProduct.length} result</p>
        <div className="d-flex flex-wrap gap-5 product-animation category-product">
          {categoryProduct.map((item) => {
            return (
              <Link
                to={`/detail/${item.id}`}
                state={{ from: item }}
                key={item.id}
                className="text-decoration-none text-black"
              >
                <div className="product-card">
                  <div className="product-image">
                    <img src={item.image} className="w-100 h-100 p-5" />
                  </div>
                  <h6 className="mt-3">{item.title}</h6>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
