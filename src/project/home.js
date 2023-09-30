import homeCSS from "./home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div style={homeCSS}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          MAB's Fast Food
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Carousel --> */}
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://burgerlab.blinkco.io/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55018%2Fweb_splash%2F1695714564.jpg&w=1080&q=90"
              alt="Los Angeles"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://burgerlab.blinkco.io/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55018%2Fweb_splash%2F1695634595.jpg&w=1080&q=90"
              alt="New York"
              class="d-block w-100"
            />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <a
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>

      {/* <!-- Jumbotron --> */}
      <div
        className="jumbotron text-center mt-4 position-relative"
        style={{
          backgroundImage:
            'url("https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1693522527-Slider.jpg&w=1200&q=75")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            className="jumbotron-content"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1 className="mb-4">Welcome to MAB's Fast Food</h1>
            <p>Enjoy the finest dining experience with our delicious dishes.</p>
            <Link className="btn btn-dark btn-lg" to="/menu" role="button">
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Menu Section --> */}
      <section className="menu">
        <div className="container">
          <div className="row">
            <div className="col-md-4 menu-item">
              <div className="card my-4">
                <img
                  src="https://www.pizzapoint.com.pk/_next/image?url=https%3A%2F%2Fadmin.indolj.io%2Fupload%2F1675750216-Mexican%20Sandwich.jpg&w=256&q=75"
                  className="card-img-top"
                  alt="Dish 1"
                />
                <div className="card-body">
                  <h2>Appetizers</h2>
                  <p>Delightful Flavorful starters to what your appetite.</p>
                  <Link className="btn btn-danger" to="/menu" role="button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-item">
              <div className="card my-4">
                <img
                  src="https://burgerlab.com.pk/wp-content/uploads/2020/12/3.jpg?c062ef&c062ef"
                  className="card-img-top"
                  alt="Dish 1"
                />
                <div className="card-body">
                  <h2>Main Courses</h2>
                  <p>Hearty and flavorful main courses for every palate.</p>
                  <Link className="btn btn-danger" to="/menu" role="button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-item">
              <div className="card my-4">
                <img
                  src="https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1672381139-Nutella%20Cake.webp&w=384&q=75"
                  className="card-img-top"
                  alt="Dish 1"
                />
                <div className="card-body">
                  <h2>Desserts</h2>
                  <p>Sweet treats to end your meal on a high note.</p>
                  <Link className="btn btn-danger" to="/menu" role="button">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="footer text-center py-3 mt-5">
        <div className="container">
          <p>&copy; 2023 MAB's Fast Food. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
