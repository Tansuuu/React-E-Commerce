import React, { useState } from "react";
import LocalStorageService from "../services/LocalStorageService";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./Login";
import UserPageController from "../controllers/UserPageController";

export default function UserPage() {
  const user = UserPageController.getUser();
  const [money, setMoney] = useState("");
  const [total, setTotal] = useState(user?.money);

  const handleChange = (event) => {
    setMoney(event.target.value);
  };

  function handleClick() {
    LocalStorageService.deleteUser();
    window.location = "/login";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const user = UserPageRepository.getUser();
    const money = e.target.children[2].children[1].value;
    const updatedUser = {
      ...user,
      money: parseInt(user.money) + parseInt(money),
    };
    console.log("USER");
    console.log(updatedUser);
    // return;
    // console.log(updatedUser);
    UserPageController.updateUser(updatedUser);
    setTotal(parseInt(user.money) + parseInt(money));
    setMoney("");
  }

  return (
    <>
      {user === null ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="container my-5 py-5 d-flex flex-wrap justify-content-between gap-5 userpage">
            <div className="userpage-card d-flex gap-5 flex-wrap align-items-end userpage-animation">
              <div>
                <h2>User Information</h2>
                <h5 className="mt-3">Id: {user.id}</h5>
                <h5 className="mt-3">Name : {user.name}</h5>
                <h5 className="mt-3">Surname : {user.surname}</h5>
                <h5 className="mt-3">Email : {user.email}</h5>
              </div>
              <button className="detail-btn" onClick={() => handleClick()}>
                Sign Out
              </button>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="userpage-card userpage-animation"
            >
              <h2>WALLET</h2>
              <h5>Money: {total}</h5>
              <div className="d-flex flex-column gap-3">
                <label htmlFor="">Bakiye yüklemek için miktarı giriniz:</label>
                <input
                  type="boolean"
                  value={money}
                  onChange={handleChange}
                  placeholder="tutar"
                  className="p-1 rounded-1 border"
                />
                <button className="detail-btn">OK</button>
              </div>
            </form>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
