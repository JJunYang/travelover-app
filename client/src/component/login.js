import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        sessionStorage.setItem("userName", res.data.username);
        sessionStorage.setItem("userID", res.data._id);
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
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
      <Container className="login-block">
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
                No Account?
                <Link to="/register" className="register-btn">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
