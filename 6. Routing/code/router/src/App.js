import React, { Component } from "react";
import { Route, Switch, Routes , Redirect, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

function App() {


  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products  />} />
          <Route path="/posts/:year/:month" element={<Posts />} />
          <Route path="/posts" element={<Posts />}/>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/not-found" element={<NotFound />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to ="/not-found" />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
