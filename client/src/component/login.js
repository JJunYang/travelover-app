import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        // console.log(res);
        // localStorage.setItem("user", res.data);
        // localStorage.setItem("userName", res.data.username);
        // localStorage.setItem("userID", res.data._id);
        sessionStorage.setItem("userName", res.data.username);
        sessionStorage.setItem("userID", res.data._id);
      })
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  handleChange = async (e) => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No Account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
