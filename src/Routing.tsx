import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./screens/Home/Home";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Cart from "./screens/Cart/Cart";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id/:category" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
