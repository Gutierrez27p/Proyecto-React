import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promocion from "./components/Promocion";

const App = () => {
  return(
    <div>
      <Header />
      <Banners />
      <Promocion />
      <Footer />
    </div>
  )
};

export default App;