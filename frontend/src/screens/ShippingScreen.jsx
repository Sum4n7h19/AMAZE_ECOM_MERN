import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { saveShippingAdress } from "../slices/cartSlice";
import CheckOutSteps from "../components/CheckOutSteps";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;

  const [adress, setAdress] = useState(shippingAdress?.adress || "");
  const [city, setCity] = useState(shippingAdress?.city || "");
  const [postalCode, setPostalCode] = useState(shippingAdress?.postalCode || "");
  const [country, setCountry] = useState(shippingAdress?.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    dispatch(saveShippingAdress({ adress, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <FormContainer>
      <CheckOutSteps Step1 Step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="adress" className="my-2">
          <Form.Control
            type="text"
            placeholder="Enter adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city" className="my-2">
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode" className="my-2">
          <Form.Control
            type="text"
            placeholder="Enter Postalcode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country" className="my-2">
          <Form.Control
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
