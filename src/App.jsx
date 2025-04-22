import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderInfiniteCarousel from "./components/HeaderInfiniteCarousel";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./pages/Cart";
import ProductLandingPage from "./components/ProductLandingPage";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Provider store={store}>
      <HeaderInfiniteCarousel />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductLandingPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
