import React from "react";
import { GoPerson } from "react-icons/go";
import { BsFillKeyFill } from "react-icons/bs";

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
          <GoPerson />
          <input className="text" type="name" placeholder="Username" />
          <BsFillKeyFill />
          <input className="text" type="password" placeholder="Password" />
        </div>

        <div className="login-button">
          <button className="button1">Login</button>
          <button className="button1">Forgot Your Password ?</button>
        </div>
       
       
        <div className="login-buttomimage">
          <img src="https://nipponpaintpartner.com/Admin/NPNImages/loginpage/waterbase.png" />
          <img src="https://nipponpaintpartner.com/Admin/NPNImages/loginpage/premila.png" />
          <img src="https://nipponpaintpartner.com/Admin/NPNImages/loginpage/superio.png" />
        </div>
      </div>
    </div>
  );
}

export default Login;
