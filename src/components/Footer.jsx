import React from "react";

export default function Footer() {
  return (
    <footer className="pt-5 container">
      <div className="row">
        <div className="col-md-5 mb-3">
          <img
            decoding="async"
            loading="lazy"
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png"
            alt=""
            className="wp-image-760"
            width="90"
            height="30"
            srcSet="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png 360w, https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-300x100.png 300w, https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-120x40.png 120w"
            sizes="(max-width: 90px) 100vw, 90px"
          />
          <h3 className="wp-block-heading mt-5">
            The best look anytime, anywhere.
          </h3>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h4>For Her</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Women Jeans
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Tops and Shirts
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Women Jackets
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Heels and Flats
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Women Accessories
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h4>For Him</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Men Jeans
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Men Shirts
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Men Shoes
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Men Accessories
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Men Jackets
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <form>
            <h4>Subscribe</h4>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <div className="d-flex flex-column">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Your email address...
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control mt-4 form-border"
                  placeholder="Email address"
                />
                <button className="detail-btn mt-3" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
        <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
