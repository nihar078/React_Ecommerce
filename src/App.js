import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Music from "./components/Layout/Music";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Music />
      <Footer />
    </Fragment>
  );
}

export default App;
