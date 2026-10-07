import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Help from "./pages/Help.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import { ui } from "./data/content.js";

function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        {ui.skip}
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Layout />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
