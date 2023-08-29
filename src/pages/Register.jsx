import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterRepository from "../controllers/RegisterRepository";
import SwalHelper from "../helpers/SwalHelper";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    money: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await RegisterRepository.register(formData);
    console.log(response);
    if (response === "Email already exists") {
      SwalHelper.cornerPopUp("warning", "Bu email kayıtlı");
    } else if (response === "Email and password are required") {
      SwalHelper.cornerPopUp("error", "Email ve Şifre girmek zorunlu");
    } else if (response === "Password is too short") {
      SwalHelper.cornerPopUp("error", "Parola en az 4 karakter içermeli");
    } else {
      SwalHelper.cornerPopUp("success", "Kayıt başarılı");
      window.location = "/";
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <>
      <Header />
      <div className="form">
        <div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <form className="px-5 py-5" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Adınız
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">
              Soyadınız
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              value={formData.surname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email adresiniz
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Şifreniz
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="detail-btn mb-2">
            Kayıt ol
          </button>
          <p>
            <Link to="/login" className="text-dark">
              Kayıtlıysanız giriş yapmak için tıklayınız
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
