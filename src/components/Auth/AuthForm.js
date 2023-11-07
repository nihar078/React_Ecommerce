import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

import AuthContext from "../../store/AuthContex";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC55NCHW_hiwLHSIG3UqSS7kQa6rC_8b60";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC55NCHW_hiwLHSIG3UqSS7kQa6rC_8b60";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.ok){
        const data = await response.json()
        const userEmail = enteredEmail.replace(/[@.]/g, "")
        authCtx.login({
            token: data.idToken,
            email: userEmail
        })
        navigate("/store")
      }
      else{
        const data = await response.json()
        let errorMessage = "Authentication failed"
        if(data && data.error && data.error.message){
            errorMessage = data.error.message
            throw new Error(errorMessage)
        }
      }
    } catch (error) {
        alert(error.message)
    }
    // if (!response.ok) {
    //   const data = await response.json();
    //   alert(data.error.message);
    // } else {
    //   const data = await response.json();
    //   authCtx.login(data.idToken)
    //   navigate('/store')
    // }
  };

  return (
    <Form onSubmit={submitHandler} className="auth">
      {/* <h2>Login</h2> */}
      <Form.Group className="control" controlId="formGroupEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" required ref={emailInputRef} />
      </Form.Group>
      <Form.Group className="control" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required ref={passwordInputRef} />
      </Form.Group>
      <div className="actions">
        <Button type="submit">
          {isLogin ? "Login" : "Create new account"}
        </Button>
        <Button className="toggle" onClick={switchAuthModeHandler}>
          {isLogin ? "Create new account" : "Login with existing account"}
        </Button>
      </div>
    </Form>
  );
};

export default AuthForm;
