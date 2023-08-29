import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginRepository from "../repositories/LoginRepository";
import SwalHelper from "../helpers/SwalHelper";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await LoginRepository.login(formData);
    console.log(response);
    if (response === "Incorrect password") {
      SwalHelper.cornerPopUp("error", "Parola hatalı");
    } else if (response === "Cannot find user") {
      SwalHelper.cornerPopUp("error", "Kayıtlı kullanıcı bulunamadı");
    } else if (response === "Password is too short") {
      SwalHelper.cornerPopUp("warning", "Parola en az 4 karakter içermeli");
    } else if (response === "Email and password are required") {
      SwalHelper.cornerPopUp("error", "Lütfen email ve parolayı giriniz");
    } else {
      SwalHelper.cornerPopUp("success", "Giriş başarılı");
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
            <label htmlFor="email" className="form-label">
              Email adresinizi giriniz
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
              Şifrenizi giriniz
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
            Giriş
          </button>
          <p>
            <Link to="/register" className="text-dark">
              Kayıt olmak için tıklayınız
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
