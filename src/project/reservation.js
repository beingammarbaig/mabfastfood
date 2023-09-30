import React from 'react'
import { Link } from 'react-router-dom'

export default function reservation() {
  return (
    <div>
      {/* <!-- Navbar --> */}
    <nav class="navbar navbar-expand-lg navbar-dark">
        <Link class="navbar-brand" to="/">MAB's Fast Food</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/menu">Menu</Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/reservation">Reservations</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>

    {/* <!-- Jumbotron with Image --> */}
    <div class="jumbotron jumbotron-fluid text-center text-white" style={{backgroundColor: "red"}}>
        <div class="container">
            <h1 class="display-4">Make a Reservation</h1>
            <p class="lead">Book a table and enjoy a wonderful dining experience.</p>
        </div>
    </div>

    {/* <!-- Reservation Form --> */}
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img src="https://i.insider.com/5458e75aeab8ea2f4f862da6?width=1136&format=jpeg" class="img-fluid my-3 d-flex" alt="Restaurant Interior"/>
                <img src="https://i.insider.com/6234a649683ded0019d24ffb?width=1300&format=jpeg&auto=webp" class="img-fluid d-flex" alt="Restaurant Interior"/>
            </div>
            <div class="col-md-6 d-flex align-items-stretch">
            <div class="d-flex flex-column justify-content-center w-100">

                <h2>Reservation Details</h2>
                <form>
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input type="date" class="form-control" id="date" required/>
                    </div>
                    <div class="form-group">
                        <label for="time">Time</label>
                        <input type="time" class="form-control" id="time" required/>
                    </div>
                    <div class="form-group">
                        <label for="party-size">Party Size</label>
                        <input type="number" class="form-control" id="party-size" min="1" required/>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" class="form-control" id="phone" required/>
                    </div>
                    <button type="submit" class="btn btn-danger">Submit Reservation</button>
                </form>
            </div>
</div>        </div>
    </div>

    {/* <!-- Footer --> */}
    <footer class="footer text-center py-3 mt-5">
        <p>&copy; 2023 MAB's Fast Food. All rights reserved.</p>
    </footer>
    </div>
  )
}
