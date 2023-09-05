import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="about">
        <Header />
        <div className="container-fluid">
          <div className="text-white text-center pt-5">
            <h1 className="mt-5 pt-5 about-head home-animation">About Us</h1>
          </div>
        </div>
      </div>
      <div className="bg-blue py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 p-5">
              <div className="about-line"></div>
              <h2 className="mt-5">Who We Are</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
                nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
                vitae erat consequat auctor eu in elit.
              </p>
            </div>
            <div className="col-sm-6 p-0">
              <img
                className="w-100"
                src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img-1024x576.jpg"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
