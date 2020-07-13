import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default class NavComponent extends Component {
  logout = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    await axios({
      url: "/logout",
      method: "GET",
    }).then((res) => {
      window.location.reload();
    });
  };
  render() {
    return (
      <Navbar
        className="app-nav"
        bg="dark"
        variant="dark"
        fixed="top"
        expand="lg"
      >
        <Link to="/home" className="navbar-brand">
          Travelover
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/tickets" className="nav-link">
              Ticket
            </Link>
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
            <Link to="/journals" className="nav-link">
              Journal
            </Link>
            <Link to="/blog/all" className="nav-link">
              Blog
            </Link>
            {sessionStorage.getItem("userName") === null ||
            sessionStorage.getItem("userName") === "" ? (
              ""
            ) : (
              <Link to="/personalcenter" className="nav-link">
                Personalcenter
              </Link>
            )}
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {sessionStorage.getItem("userName") === "" ||
              sessionStorage.getItem("userName") === null ? (
                <>
                  Hello,<a href="/login"> Please Login</a> |
                </>
              ) : (
                <>Signed in as : {sessionStorage.getItem("userName")} |</>
              )}
            </Navbar.Text>
            {sessionStorage.getItem("userName") === "" ||
            sessionStorage.getItem("userName") === null ? (
              ""
            ) : (
              // <Link to="/login">
              <Button
                variant="dark"
                onClick={this.logout}
                style={{
                  marginLeft: "0px",
                  marginTop: "0px",
                  color: "orange",
                }}
              >
                Logout
              </Button>
              // </Link>
            )}
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
