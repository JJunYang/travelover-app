import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class NavComponent extends Component {
  logout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    await axios({
      url: "/logout",
      method: "GET",
    }).then((res) => {
      window.location.reload();
    });
  };
  render() {
    return (
      <Container style={{ marginBottom: "55px" }}>
        <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand href="/home">Travelover</Navbar.Brand>
          <span style={{color:"grey"}}>|</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/tickets">Ticket</Nav.Link>
              <Nav.Link href="/travelGuides">TravelGuide</Nav.Link>
              {localStorage.getItem("userName") === null ||
              localStorage.getItem("userName") === "" ? (
                ""
              ) : (
                <Nav.Link href="/personalcenter">Personalcenter</Nav.Link>
              )}
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {localStorage.getItem("userName") === "" ||
                localStorage.getItem("userName") === null ? (
                  <>
                    Hello,<a href="/login"> Please Login</a> |
                  </>
                ) : (
                  <>Signed in as : {localStorage.getItem("userName")} |</>
                )}
              </Navbar.Text>
              {localStorage.getItem("userName") === "" ||
              localStorage.getItem("userName") === null ? (
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
      </Container>
    );
  }
}
