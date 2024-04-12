import React, { useState } from "react";
import "../CSS/Register.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { register } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  // const dispatcher = useDispatch([]);

  const [CustomerName, setCustomerName] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [CustomerPassword, setCustomerPassword] = useState("");
  const [CustomerMobileNo, setCustomerMobileNo] = useState("");
  const [CustomerAddress, setCustomerAddress] = useState("");
  const [CustomerCity, setCustomerCity] = useState("");
  const [CustomerPinCode, setCustomerPinCode] = useState("");

  const addFoods = () => {
    const addCustomerData = {
      CustomerName: CustomerName,
      CustomerEmail: CustomerEmail,
      CustomerPassword: CustomerPassword,
      CustomerMobileNo: Number(CustomerMobileNo),
      CustomerAddress: CustomerAddress,
      CustomerCity: CustomerCity,
      CustomerPinCode: Number(CustomerPinCode),
    };
    axios
      .post("http://localhost:5000/api/addcustomer", addCustomerData)
      .then((result) => {
        console.log("DATA", result.data)
        // dispatcher(register(result.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main-div">
      <div className="sec-div"></div>
      <div className="third-div">
        <form className="box-register">
          <h4>Register</h4>
          <Row>
            <Col>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="reg-row">
            <Col>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setCustomerPassword(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="number"
                placeholder="Mobile No."
                onChange={(e) => setCustomerMobileNo(e.target.value)}
              />
            </Col>
          </Row>

          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setCustomerAddress(e.target.value)}
          />
          <Row className="reg-row">
            <Col>
              <input
                type="text"
                placeholder="City"
                onChange={(e) => setCustomerCity(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="number"
                placeholder="Pin Code"
                onChange={(e) => setCustomerPinCode(e.target.value)}
              />
            </Col>
          </Row>
          <button
            onClick={() => addFoods()}
          >Register</button>
          <p>
            Already have an account
            <Link className="navlink" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
