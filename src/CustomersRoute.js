import React from "react";

import Home from "./Components/Home";
import Foods from "./Components/Foods";
import AboutUs from "./Components/AboutUs";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
import Login from "./Components/Login";
import Register from "./Components/Register";
import OrderDetails from "./Components/OrderDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./MyNavBar";

const CustomersRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CustomersRoute;
