import React, { Component } from "react";

import "./LogIn.css";

class LogIn extends Component {
  render() {
    return (
      <div className="LogIn">
        <form className="LogInForm">
          <h3>
            <span className="LogInSpan">Administrator</span> Login
          </h3>
          <input className="LogInInput" type="email" placeholder="E-mail" />
          <input
            className="LogInInput"
            type="password"
            placeholder="Password"
          />
          <button className="LogInButton">Login</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
