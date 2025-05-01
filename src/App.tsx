import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import VirtualStore from "./components/VirtualStore";
import AboutPerfumes from "./components/AboutPerfumes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="inicio">
        <Home />
      </section>
      <section id="catalogo">
        <Catalog />
      </section>
      <section id="loja-virtual">
        <VirtualStore />
      </section>
      <section id="sobre-perfumes">
        <AboutPerfumes />
      </section>
      <Footer />
    </div>
  );
}

export default App;
