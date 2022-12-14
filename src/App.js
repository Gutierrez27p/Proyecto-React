import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { Footer} from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar"; 

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;