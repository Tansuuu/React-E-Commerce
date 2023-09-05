import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import ExampleContoller from "../controllers/ExampleController";
import { Status } from "../utils/Resource";

export default function Home() {
  const [data, setData] = useState([]);
  const [pageStatus, setPageStatus] = useState(true);

  useEffect(() => {
    getDatas();
    ExampleContoller.getProducts()
      .then((data) => {})
      .catch((error) => {});

    ExampleContoller.getGlobals();
  }, []);

  async function getDatas() {
    const product = await ProductService.getProducts();
    if (product.status == Status.SUCCESS) {
      setData(product);
    } else {
      setPageStatus(false);
    }
  }

  return pageStatus === true ? (
    <>
      <div className="home mb-5">
        <Header />
        <div className="container-fluid my-5 home-animation">
          <div className="home-title text-white">
            <h1>Raining Offers For Hot Summer!</h1>
            <h3>25% Off On All Products</h3>
            <button className="home-btn btn-active mt-5 me-3">SHOP NOW</button>
            <button className="home-btn mt-5">FIND MORE</button>
          </div>
        </div>
      </div>
      <div className="scroll-container container d-flex justify-content-between py-5 align-items-center">
        <img src="/images/client-logo-1.png" alt="logo" />
        <img src="/images/client-logo-2.png" alt="logo" />
        <img src="/images/client-logo-3.png" alt="logo" />
        <img src="/images/client-logo-1.png" alt="logo" />
        <img src="/images/client-logo-4.png" alt="logo" />
      </div>
      <div className="container my-5 pb-5">
        <div className="row justify-content-between m-0">
          <div className="col-sm-4 home-card">
            <img
              src="https://img.freepik.com/free-photo/woman-wearing-pink-dress-holding-shopping-bags_329181-9167.jpg?w=2000"
              alt="woman"
            />
            <div className="card-text">
              <h3>20% Off On Tank Tops</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ac dictum.
              </p>
              <button className="home-btn btn-active">SHOP NOW</button>
            </div>
          </div>
          <div className="col-sm-4 home-card">
            <img
              src="https://previews.123rf.com/images/lightfieldstudios/lightfieldstudios1708/lightfieldstudios170802975/84052141-man-standing-with-shopping-bags-in-shopping-mall.jpg"
              alt="man"
            />
            <div className="card-text">
              <h3>20% Off On Tank Tops</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ac dictum.
              </p>
              <button className="home-btn btn-active">SHOP NOW</button>
            </div>
          </div>
          <div className="col-sm-4 home-card">
            <img
              src="https://www.mipiaci.co.nz/media/catalog/product/M/a/Marilyn22sMCDM_Pastel-Pink-Patent_2_2.jpg"
              alt="shoes"
            />
            <div className="card-text">
              <h3>20% Off On Tank Tops</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ac dictum.
              </p>
              <button className="home-btn btn-active">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-5 bg-blue reveal">
        <h2 className="text-center">Featured Products</h2>
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {data.length === 0
            ? "loading..."
            : data.data.map((item) => {
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
                      {/* <button onClick={() => handle Click(item)}>Add to card</button> */}
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1 className="d-flex align-items-center justify-content-center h-100">
      ERROR
    </h1>
  );
}
