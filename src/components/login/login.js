import React from 'react';
import { Link } from "react-router-dom";
import './login.css';

function MyFunction() {
  alert("You have logged in successfully!");
}

function Login() {
  return (
    <div>
      <main>
        <div className="login-row">
          <div className="login-col-logo">
            <p><a href="https://www.facebook.com/"><img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" /></a></p>
            <h2 style={{ textAlign: "center" }}>Facebook helps to connect.</h2>
            <p style={{ textAlign: "center" }}>American online social media and social networking service</p>
          </div>
          <div className="login-col-form">
            <div className="login-hold">
              <input type="text" placeholder="Phone number, username or email address" />
              <input type="password" placeholder="Password" />


              <button onClick={MyFunction} className="login-button">
                <Link to="/home">Log in</Link>
              </button>

              {/* Alternative for the above login button */}
              {/* <Link to="/home" className="login-button" onClick={MyFunction}>
                Log in
              </Link> */}



              <a href="#">Forgot password?</a>
              <button className="login-new-account" id="createaccount">
                <Link to="/createaccount">Create new Acount</Link>
              </button>
              {/* <a href="createid.html">
                <button className="login-new-account">Create new Account</button>
              </a> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
