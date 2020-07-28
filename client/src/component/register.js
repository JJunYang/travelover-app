import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    password2: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email, password2 } = this.state;
    if (password2 !== password) {
      alert("Please check your password");
      return;
    } else {
      axios({
        url: "/register",
        method: "POST",
        data: {
          username,
          password,
          email,
        },
      })
        .then((res) => {
          localStorage.setItem("userName", res.data.username);
          localStorage.setItem("userID", res.data._id);
        })
        .then(() => {
          this.props.history.push("/login");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };
  handleChange = async (e) => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <Container className="register-block">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus"></i> Register
              </h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter User Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
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
                    placeholder="Create Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
              <p className="lead mt-4">
                Have An Account?
                <Link to="/login" className="login-btn">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
