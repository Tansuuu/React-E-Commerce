import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import ProductService from "../services/ProductService";
import BasketRepository from "../controllers/BasketController";
import BasketHelper from "../helpers/BasketHelper";

export default function Header() {
  const [category, setCategory] = useState();
  const location = useLocation();
  const path = location?.state?.from;

  var size = BasketHelper.getSize();
  var count = BasketHelper.getCount();

  // useEffect(() => {
  //   productCategories();
  //   getDatas();
  // }, []);
  useEffect(() => {
    fetchData();
    getDatas();
  }, [size, count]);

  async function fetchData() {
    await productCategories();
    await getDatas();
  }

  // useEffect(() => {
  //   // console.log("Basket Changed");
  //   // getDatas();
  //   // getDatas();
  //   // if (!headerInitial) {
  //   //   getDatas();
  //   //   console.log("Selam");
  //   // }
  // }, [basketSize]);

  async function productCategories() {
    setCategory((await ProductService.getCategories()).data);
  }

  async function getDatas() {
    await BasketRepository.basket();
    size = BasketHelper.getSize();
    count = BasketHelper.getCount();
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <nav className="navbar navbar-expand-lg header px-2">
      <div className="container-fluid text-white p-0">
        <NavLink to="/" className="navbar-brand nav-link">
          <img src="/images/logo.png" />
        </NavLink>
        <button
          className="navbar-toggler collesed collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse menu" id="navbarNavAltMarkup">
          <div className="d-flex gap-3 menu-1">
            {category === undefined
              ? "Loading..."
              : category?.map((item, index) => {
                  return (
                    <NavLink
                      to={`/category/${item}`}
                      state={{ from: item }}
                      className={`categories-nav nav-link fw-bold ${
                        path === item ? "active-link" : ""
                      }`}
                      key={index}
                    >
                      {item.toUpperCase()}
                    </NavLink>
                  );
                })}
          </div>
          <div className="navbar-nav ms-auto d-flex gap-3 menu-2">
            <NavLink
              to="/about"
              className={`nav-link text-white fw-bold ${
                location.pathname === "/about" ? "active-link" : ""
              }`}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={`nav-link text-white fw-bold ${
                location.pathname === "/contact" ? "active-link" : ""
              }`}
            >
              CONTACT US
            </NavLink>
            <div className="d-flex flex-row me-5 header-icon py-0">
              <NavLink to="/basket" className="nav-link text-white fw-bold">
                $ {count}
                {/* {basket?.reduce((acc, obj) => acc + obj.price * obj.count, 0) ??
                  "0.00"} */}
              </NavLink>
              <NavLink
                to="/basket"
                className="nav-link position-relative text-white fw-bold"
              >
                <FontAwesomeIcon icon={faBagShopping} />
                <div className="amount">
                  {size}
                  {/* {basket?.reduce((acc, obj) => acc + obj.count, 0) ?? 0} */}
                </div>
              </NavLink>
              <NavLink to="/user" className="nav-link text-white fw-bold">
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
