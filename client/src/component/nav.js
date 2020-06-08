import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <Container style={{ marginBottom: "20px" }}>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="/home">GoTravel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/tickets">Ticket</Nav.Link>
            <Nav.Link href="/travelGuideline">TravelGuide</Nav.Link>
            <Nav.Link href="/grouptour">GroupTour</Nav.Link>
            <Nav.Link href="/society">Society</Nav.Link>
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
              <Link to="/login">
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
              </Link>
            )}
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavComponent;
