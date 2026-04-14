import { Routes, Route } from "react-router";
import { HomePage } from "./Pages/home/HomePage";
import { CheckoutPage } from "./Pages/Checkout/CheckoutPage";
import { OrdersPage } from "./Pages/orders/OrdersPage";
import { TrackingPage } from "./Pages/TrackingPage";
import { PageNotFound } from "./Pages/PageNotFound";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCartData = async () => {
      const response = axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchCartData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
