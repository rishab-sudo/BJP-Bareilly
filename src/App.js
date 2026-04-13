// App.js
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <>

        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>

          <Footer />
        </div>
  
    </>
  );
}

export default App;