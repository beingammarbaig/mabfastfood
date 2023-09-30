import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./project/home.js";
import Contact from "./project/contact.js";
import Reservation from "./project/reservation.js";
import Menu from "./project/menu";
import AddMenu from "./project/addMenu";

function App() {


  let [app,setapp] = useState([])

  const loaddata = async () => {
    try {
      const response = await fetch("http://localhost:5000/menu/appetizer", {
        method: "POST",
        headers: {
          'Content-Type': 'application.json'
        }
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log(data);
      setapp(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    loaddata()
  },[])

  let [appetizer] = useState([
  {name: "Pizza Bite", img: "https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F312880%2F312880%2Fdish%2F16336024521945717548.jpg&w=1200&q=100", desc: "Description of Appetizer 1. Lorem ipsum dolor sit amet.", price: "5.99"},
  {name: "Nuggets", img: "https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F312882%2F312882%2Fdish%2F16336026581491630777.jpg&w=1200&q=100", desc: "Description of Appetizer 2. Lorem ipsum dolor sit amet.", price: "4.99"},
  {name: "Garlic Bread", img: "https://pizzamax.com.pk/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2Frestaurant_new%2F312881%2F312881%2Fdish%2F16336026091192891848.jpg&w=1200&q=100", desc: "Description of Appetizer 3. Lorem ipsum dolor sit amet.", price: "2.99"},
  ]);
  let [maincourse] = useState([
    {name: "Burger", img: "https://burgerlab.blinkco.io/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F55018%2Fdish_image%2F1690972850.jpg&w=256&q=90", desc: "Description of Main Course 1. Lorem ipsum dolor sit amet.", price: "4.99"},
    {name: "Pizza", img: "https://www.pizzapoint.com.pk/_next/image?url=https%3A%2F%2Fadmin.indolj.io%2Fupload%2F1666936883-Kabab%20Chaska.jpeg&w=256&q=75", desc: "Description of Main Course 2. Lorem ipsum dolor sit amet.", price: "5.99"},
    {name: "Max Wrap", img: "https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1678304741-creamy%20wrap.jpg&w=256&q=75", desc: "Description of Main Course 3. Lorem ipsum dolor sit amet.", price: "3.99"},
    ]);
  let [desserts] = useState([
      {name: "Cake", img: "https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1672381743-Honey%20Cake.webp&w=384&q=75", desc: "Description of Dessert 1. Lorem ipsum dolor sit amet.", price: "5.99"},
      {name: "Donuts", img: "https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1681587355-3A1A1287t.jpg&w=384&q=75", desc: "Description of Dessert 2. Lorem ipsum dolor sit amet.", price: "1.99"},
      {name: "Brownie", img: "https://delizia.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1673694483-cadbury-brownie-min.jpg&w=384&q=75", desc: "Description of Dessert 3. Lorem ipsum dolor sit amet.", price: "0.99"},
      ]);
 


  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/reservation" element={<Reservation/>} />
            <Route exact path="/menu" element={<Menu app={app} maincourse={maincourse} desserts={desserts}/>} />
            <Route exact path="/admin" element={<AddMenu/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
