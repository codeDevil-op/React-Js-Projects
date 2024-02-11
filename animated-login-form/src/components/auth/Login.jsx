import React from "react";
import loginImg from "../../assets/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({onReset,onRegister,onEyeVisibility, onHandleVisible}) => {
  return (
    <>
      <div className="main-container --flex-center">
        <div className="img-container">
          <img src={loginImg} alt="Login" />
        </div>
        <div className="form-container">
          <form className="--form-control">
            <h2 className="--color-danger --text-center">Login</h2>
            <input type="text" placeholder="Username" className="--width-100" />
            <div className="password">
            <input
              type={onEyeVisibility ? "text" : "password"}
              placeholder="Password"
              className="--width-100"
            />
            <span className="icon" onClick={onHandleVisible}>
                {onEyeVisibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>
            <button className="--btn --btn-primary --btn-block">Login</button>
            <a href="#" className="--text-sm" onClick={onReset}>
              Forgot Password
            </a>
            <span className="--text-sm --block">
              Don't have an acount ? <a href="#" onClick={onRegister}>Register</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
