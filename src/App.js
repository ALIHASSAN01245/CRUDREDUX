import { Route } from "react-router-dom";
import { React, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAuthor from "./components/AddAuthor";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AuthorHome from "./components/AuthorHome";
import "./style.css";
import EditAuthor from "./components/EditAuthor";
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddBook />} />
      <Route exact path="/edit/:id" component={() => <EditBook />} />
      <Route exact path="/author" component={() => <AuthorHome />} />
      <Route exact path="/auth" component={() => <AddAuthor />} />
      <Route exact path="/editauth/:id" component={() => <EditAuthor />} />
    </div>
  );
};
export default App;
