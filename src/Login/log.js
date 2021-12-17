import React from "react";
import { GoPerson } from "react-icons/go";
import { BsFillKeyFill } from "react-icons/bs";
import "../App.css";
import Slider from "../Slider"

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-image">
          <img
            src="https://nipponpaintpartner.com/Default/img/logo.jpg"
            alt="logo"
          />
        </div>

        <div className="login-name">
          <GoPerson className="logo" style={{ height: "30px", width: "1cm" }} />

          <div className="login-name1">
            <input className="text" type="name" placeholder="Username" />
          </div>

          <BsFillKeyFill
            className="logo"
            style={{ height: "30px", width: "1cm" }}
          />

          <div className="login-name2">
            <input className="text" type="password" placeholder="Password" />
          </div>
        </div>

        <div className="login-button">
          <button className="button1">Login</button>
          <button className="button2">Forgot Your Password ?</button>
        </div>

        <div className="login-buttomimage">
          <img
            className="sponcer"
            src="https://nipponpaintpartner.com/Admin/NPNImages/loginpage/waterbase.png"
          />
          <img
            className="sponcer"
            src="https://nipponpaintpartner.com/Admin/NPNImages/loginpage/premila.png"
          />
          <img
            className="sponcer"
            src="https://nipponpaintpartner.com/Admin/NPNImages/loginpage/superio.png"
          />
        </div>
      </div>

    </div>
  );
}

export default Login;
