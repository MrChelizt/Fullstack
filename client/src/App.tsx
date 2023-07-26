import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import Brand from "./pages/Brand";
import Cart from "./pages/Cart";
import Copyright from "./pages/Copyright";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
