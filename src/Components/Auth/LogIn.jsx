import React, { Component } from "react";
import "./LogIn.css";
import axios from "axios";
import AuthService from "../../Services/auth.service"

class LogIn extends Component {
  state = {
    controls: {
      username: {
        value: "",
        valueType: "Username",
        type: "username",
        placeholder: "Username",
        validation: {
          required: true,
          
        },
        valid: false,
        touched: false,
      },
      password: {
        value: "",
        valueType: "Password",
        type: "password",
        placeholder: "Password",
        validation: {
          required: true,
          minLength: 4,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };
  

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

  

    return isValid;
  };

  inputChangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
    };

    const updatedControlElement = {
      ...this.state.controls[controlName],
    };

    updatedControlElement.value = event.target.value;

    updatedControlElement.valid = this.checkValidity(
      updatedControlElement.value,
      updatedControlElement.validation
    );

    updatedControlElement.touched = true;

    updatedControls[controlName] = updatedControlElement;

    let formIsValid = true;

    for (let controlName in updatedControls) {
      formIsValid = updatedControls[controlName].valid && formIsValid;
    }

    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const adminData = {};

    for (let controlName in this.state.controls) {
      adminData[controlName] = this.state.controls[controlName].value;
    }

    
    
    AuthService.login(adminData.username, adminData.password ).then(
            () => {
              this.props.history.push("/adminpanel");
              //window.location.reload();
         
         })

   

  };

  
  render() {
    

    let formControls = [];

    for (let key in this.state.controls) {
      formControls.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = (
      <form className="LogInForm" onSubmit={this.submitHandler}>
        <h3>
          <span className="LogInSpan">Administrator</span> Login
        </h3>
        {formControls.map((formElement) => (
          <input
            key={formElement.id}
            className="LogInInput"
            type={formElement.config.type}
            placeholder={formElement.config.placeholder}
            value={formElement.config.value}
            onChange={(event) => this.inputChangeHandler(event, formElement.id)}
          />
        ))}
        <button className="LogInButton" disabled={!this.state.formIsValid}>
          Login
        </button>
      </form>
    );
    

    return <div className="LogIn">{form}</div>;
  }
}

export default LogIn;
