import React from "react";
import { Link } from "react-router-dom";

export default function menu(props) {
  return (
    <>
      {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark">
        <Link class="navbar-brand" to="/">
          MAB's Fast Food
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/reservation">
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Jumbotron with Image */}
      <div
        class="jumbotron jumbotron-fluid text-center text-dark bg-dark"
        style={{
          backgroundImage:
            'url("https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55083%2Fweb_splash%2F1693797635.jpg&w=1200&q=90")',
        }}
      >
        <div
          class="container"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "#ff0000" }}
        >
          <h1 class="display-4">Our Menu</h1>
          <p class="lead">Explore our delicious offerings.</p>
        </div>
      </div>

      {/* Menu Sections */}
      <div class="container">
        <section>
          <h2 class="text-center">Appetizers</h2>
          <div class="row">
            {props.app.map((x) => {
              return (
                <>
                {x.map((y) => {
                  return(
                    <>
                  <div class="col-md-4">
                    <div class="card mb-4">
                      <img src={y.url} class="card-img-top" alt="Appetizer" />
                      <div class="card-body">
                        <h5 class="card-title">{y.name}</h5>
                        <p class="card-text">{y.desc}</p>
                        <p class="card-text">
                          <strong>Price: {y.price}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </>)})}
                </>
              
              );
            })}
          </div>
        </section>

        <section>
          <h2 class="text-center">Main Course</h2>
          <div class="row">
            {props.maincourse.map((x) => {
              return (
                <>
                  <div class="col-md-4">
                    <div class="card mb-4">
                      <img src={x.img} class="card-img-top" alt="Appetizer" />
                      <div class="card-body">
                        <h5 class="card-title">{x.name}</h5>
                        <p class="card-text">{x.desc}</p>
                        <p class="card-text">
                          <strong>Price: {x.price}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>

        <section>
          <h2 class="text-center">Desserts</h2>
          <div class="row">
            {props.desserts.map((x) => {
              return (
                <>
                  <div class="col-md-4">
                    <div class="card mb-4">
                      <img src={x.img} class="card-img-top" alt="Appetizer" />
                      <div class="card-body">
                        <h5 class="card-title">{x.name}</h5>
                        <p class="card-text">{x.desc}</p>
                        <p class="card-text">
                          <strong>Price: {x.price}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer class="footer text-center py-3 mt-5">
        <p>&copy; 2023 MAB's Fast Food. All rights reserved.</p>
      </footer>
    </>
  );
}
