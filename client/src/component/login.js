import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios({
      url: "/login",
      method: "POST",
      data: {
        username,
        password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response.data);
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
                  name="username"
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
