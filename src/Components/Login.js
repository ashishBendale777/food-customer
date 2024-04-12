import React, { useState } from "react";
import "../CSS/Login.css";
import axios from "axios";
import { login } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatcher = useDispatch([]);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const addCustomers = () => {
    const addUserDatas = {
      CustomerEmail: Email,
      CustomerPassword: Password,
    };
    axios
      .post("http://localhost:5000/api/dologin", addUserDatas)
      .then((result) => {
        console.log("DATA", result.data);
        console.log(result.data.message);
        if (result.data.data) {
          dispatcher(login(result.data.data));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mains-div">
      <div className="fdiv"></div>
      <div className="sdiv">
        <form className="box-login">
          <h4>Login</h4>
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="login"
            placeholder="Login"
            onClick={() => addCustomers()}
          />
          <p>Don't have an account
            <Link className="navlink" to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
