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
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";

// Main App component
function App() {
  return (
    // Provide Redux store to the app
    <Provider store={store}>
      <HeaderInfiniteCarousel />
      <Header />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductLandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/terms&condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route
          path="/accessibility-statement"
          element={<AccessibilityStatement />}
        />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
