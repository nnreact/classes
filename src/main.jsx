import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainBody from "./components/MainBody"
import Footer from "./components/Footer"
import "./index.css";
import Counter from "./components/Counter";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="parent">

    <Counter />
    <Counter />

    {/* <Header />

    <MainBody />

    <Footer /> */}

  </div>
)