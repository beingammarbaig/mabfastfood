import React, { useState } from "react";

export default function AddMenu() {
  const [dessert, setdessert] = useState([
    { name: " ", url: " ", desc: " ", price: " " },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/add/dessert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: dessert.name,
        url: dessert.url,
        desc: dessert.desc,
        price: dessert.price,
      }),
    });
    const json = await response.json();
    console.log(json);
    setdessert({ name: " ", url: " ", desc: " ", price: " " })
  };

  const changeon = (e) => {
    setdessert({ ...dessert, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Dish Information</h2>
        <form onSubmit={handleSubmit}>
          {/* <!-- Dish Name Input --> */}
          <div className="form-group">
            <label htmlFor="dishName">Dish Name:</label>
            <input
              onChange={changeon}
              name="name"
              value={dessert.name}
              type="text"
              className="form-control"
              id="dishName"
              placeholder="Enter the name of the dish"
            />
          </div>

          {/* <!-- Image URL Input --> */}
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              onChange={changeon}
              name="url"
              value={dessert.url}
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Enter the image URL"
            />
          </div>

          {/* <!-- Description Input --> */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={changeon}
              name="desc"
              value={dessert.desc}
              className="form-control"
              id="description"
              rows="4"
              placeholder="Enter a description"
            ></textarea>
          </div>

          {/* <!-- Price Input --> */}
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              onChange={changeon}
              name="price"
              value={dessert.price}
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter the price"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
