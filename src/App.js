import React, { Fragment, useContext, useState } from "react";
import Header from "./components/Header/Header";
import Music from "./components/Layout/Music";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import {Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import ProductDeatails from "./components/Layout/ProductDetails";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/AuthContex";

function App() {
  const authCtx = useContext(AuthContext);
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
      <Routes>
        <Route path="/" element={<Navigate to="/store" />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/store"
          element={
            <>
              {authCtx.isLoggedIn && <Music onShowCart={showCartHandler} />}
              {!authCtx.isLoggedIn && <Navigate to="/auth" />}
            </>
          }
        />
        <Route path="store/product-details/:id" element={<ProductDeatails />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/contact"
          element={
            <>
              {authCtx.isLoggedIn && <Contact />}
              {!authCtx.isLoggedIn && <Navigate to="/auth" />}{" "}
            </>
          }
        />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
