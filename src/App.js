import React from "react";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promocion from "./components/Promocion";

const App = () => {
  return(
    <div>
      <NavBar />
      <ItemListContainer msj={"Con la compra de un COMBO TRIPLE LENNY  + $400  Te llevas de regalo un carl de juguete!"} />
      <Banners />
      <Promocion />
      <Footer />
    </div>
  )
};

export default App;