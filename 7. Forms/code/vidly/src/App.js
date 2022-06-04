import React, { Component } from "react";
import "./App.css";
import Movies2 from "./components/movies2";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import MovieForm from "./components/movieForm";
import Login from "./components/login";

function App() {
  return (
    <main className="container">
      <h1>Home Calling</h1>

      {/* <Movies2 /> */}
      <Navbar />
      <Switch>
        {/* <Route exact path="/">
          <App />
        </Route> */}
          <Route path="/login">
          <Login />
        </Route>
         <Route path="/movies/:id">
          <MovieForm />
        </Route>
        <Route path="/movies">
          <Movies2 />
        </Route>
        <Redirect exact from="/" to="/movies" />

        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/rentals">
          <Rentals />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default App;

// FOR IMPORITNG bootstrap and fontawesome

// import "bootstrap/dist/css/bootstrap.css"
// import "font-awesome/css/font-awesome.css"

// use cc
// for creating class component

// use imrc
// for importing component and react from react

// by using filter you can filterize what u need and what u dont need

// if you use reference of fucntion on onclick it will be directly call so use arrow function while calling it when u have attribute
