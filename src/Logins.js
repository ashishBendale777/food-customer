import React from "react";
import "./Logins.css";

const Logins = () => {
  return (
    <div className="main-container">
      <div class="font-area">
        <div class="img-area">
          <img src="./images/resize-17122115751490563606girls.jpg" alt="" />
        </div>
        <h2>Login Form</h2>
        <p>Your Email</p>
        <input type="email" />
        <p>Your Password</p>
        <input type="password" />
        <a href="#" class="btn">
          <span class="btn-text">Sign In</span>
          <span class="btn-text">
            Log In
          </span>
        </a>
        <a href="" class="for-passw">
          Forgot Password
        </a>
      </div>
    </div>
  );
};

export default Logins;
