import React from 'react'
import { Link } from 'react-router-dom'

export default function contact() {
  return (
    <div>
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
                <li class="nav-item">
                    <Link class="nav-link" to="/reservation">Reservations</Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>

    {/* <!-- Jumbotron --> */}
    <div class="jumbotron text-center text-white">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Reach out to us.</p>
    </div>

    {/* <!-- Contact Form --> */}
    <div class="container contact-form">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-danger">Submit</button>
                </form>
            </div>
        </div>
    </div>

    {/* <!-- Footer --> */}
    <footer class="footer text-center py-3 mt-5">
        <p>&copy; 2023 MAB's Fast Food. All rights reserved.</p>
    </footer>
    </div>
  )
}
