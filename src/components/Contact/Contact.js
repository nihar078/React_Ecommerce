import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [saveUser, setSaveUser] = useState(false);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const addUserHandler = async (user) => {
    try {
      const response = await fetch(
        "https://react-ecom-pra-oct-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong...");
      } else {
        setSaveUser(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const saveUserDetailsHandler = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      phonenumber: phone,
    };
    console.log(user);
    addUserHandler(user);
  };

  return (
    <section>
      <Container>
        <h1>Contact US</h1>
        {saveUser && (
          <div className="saveUser-wrap">
            <h5>ThankYou for Contacting Us!!</h5>
            <p>We saved your Contact...</p>
          </div>
        )}
        {!saveUser && (
          <Form className="form-wrap " onSubmit={saveUserDetailsHandler}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={nameHandler}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={emailHandler}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={phoneHandler}
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Container>
    </section>
  );
};

export default Contact;
