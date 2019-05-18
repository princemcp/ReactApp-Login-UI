import React from "react";
import Form from "../../Common/forms";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import Joi from "joi-browser";

class login extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", password: "" },
      errors: {},
      redirect: false,
      redirectUrl: ""
    };
  }
  style = {
    //left: 0,
    //right: 0,
    //"margin-left": 20,
    //"margin-right": 20
    //"max-height": 500
  };

  maxhight = {
    marginTop: 150
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  handleOnReDirect = redirectUrl => {
    // some action...
    // then redirect
    this.setState({ redirect: true, redirectUrl });
  };

  handleLogin = e => {
    e.preventDefault();

    if (this.handleSubmit2()) {
      this.setState({
        redirect: true,
        redirectUrl: "/dashboard?username=" + this.state.data.username
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectUrl} />;
    }
    return (
      <div style={this.maxhight}>
        <div className="row justify-content-center">
          <div className="col-xs-2 mx-3 py-5 px-3 card " style={this.style}>
            <h4 className="card-title text-center ">
              Welcome to Agent Banking System
            </h4>
            <p className="text-primary text-center">Sign in</p>
            <form>
              {this.renderInputTextBox("username", "Username")}
              {this.renderInputTextBox("password", "Password", "password")}
              {this.renderButtonPrimary("Login", this.handleLogin)}

              <div className="clearfix pt-1">
                <Link
                  to="/register"
                  className="btn btn-outline-secondary float-left w-48"
                >
                  Signup
                </Link>
                <Link
                  to="/forgotpassword"
                  className="btn btn-outline-secondary float-right  w-48"
                >
                  Forgot Password
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
