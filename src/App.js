import React, { useState } from "react";
import Header from "./components/Header/Header";
import Music from "./components/Layout/Music";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Music />
      <Footer />
    </CartProvider>
  );
}

export default App;
