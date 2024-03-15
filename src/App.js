import React from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard.js";
import Products from "./Components/Products.js";
import Orders from "./Components/Orders.js";
import OrdersCalender from "./Components/OrderCalender.js"

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
      <Routes className= "Routes">
        <Route path='/' exact element= {<Dashboard/>} />
        <Route path='/Dashboard' element={<Dashboard/> } />
        <Route path="/Products" element={<Products/> } />
        <Route path="/Orders" element={<Orders/> } />
        <Route path="/OrdersCalender" element={<OrdersCalender/>} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}