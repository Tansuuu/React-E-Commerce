import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactController from "../controllers/ContactController";
import { Resource, Status } from "../utils/Resource";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [responseData, setResponseData] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    setResponseData(Resource.Loading());
    const response = await ContactController.emailPost(formData);
    setResponseData(response);
    // console.log(response);
    setFormData({ name: "", subject: "", email: "", message: "" });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  return (
    <div className="bg-blue">
      <div className="contact">
        <Header />
        <div className="container-fluid">
          <div className="text-white text-center pt-5">
            <h1 className="mt-5 pt-5 about-head home-animation">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container text-center my-5 py-5">
        <h5>Have any queries?</h5>
        <h1>We're here to help.​</h1>
        <div className="contact-line"></div>
        <div className="d-flex gap-3 flex-wrap mt-5 pt-5">
          <div className="contact-card">
            <h3 className="fw-bold">Sales</h3>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5>1800 123 4567</h5>
          </div>
          <div className="contact-card">
            <h3 className="fw-bold">Complaints</h3>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5>1900 223 8899</h5>
          </div>
          <div className="contact-card">
            <h3 className="fw-bold">Returns</h3>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5>returns@mail.com</h5>
          </div>
          <div className="contact-card">
            <h3 className="fw-bold">Marketing</h3>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <h5>1700 444 5578</h5>
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <h6>Don't be a stranger!</h6>
            <h2>You tell us. We listen.</h2>
            <p className="mt-5">
              Cras elementum finibus lacus nec lacinia. Quisque non convallis
              nisl, eu condimentum sem. Proin dignissim libero lacus, ut
              eleifend magna vehicula et. Nam mattis est sed tellus.
            </p>
          </div>
          <form
            className="col-sm-6 d-flex flex-column bg-white p-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="mt-3 contact-input"
              type="text"
              placeholder="NAME"
              onChange={(e) => handleChange(e)}
              id="name"
              value={formData.name}
            />
            <input
              className="mt-3 contact-input"
              type="text"
              placeholder="SUBJECT"
              onChange={(e) => handleChange(e)}
              id="subject"
              value={formData.subject}
            />
            <input
              className="mt-3 contact-input"
              type="text"
              placeholder="EMAIL"
              onChange={(e) => handleChange(e)}
              id="email"
              value={formData.email}
            />
            <textarea
              className="mt-3 contact-input"
              type="text"
              placeholder="MESSAGE"
              rows={6}
              onChange={(e) => handleChange(e)}
              id="message"
              value={formData.message}
            />
            {/* <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">
              Click to Send an Email
            </a> */}
            <button className="mt-3 detail-btn" type="submit">
              {responseData?.status === Status.LOADING ? (
                <p>Loading...</p>
              ) : (
                <p>SEND MESSAGE</p>
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
