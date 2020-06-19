import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
export default class CityPageNav extends Component {
  render() {
    return (
      <>
        <Container>
          <Nav className="city-nav">
            <Nav.Item className="city-nav-item">
              <Nav.Link className="city-nav-link" href="/city">
                <img
                  src={process.env.PUBLIC_URL + "/Icon/city.png"}
                  alt="icon-city"
                  className="city-icon"
                ></img>
                Tokyo
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="city-nav-item">
              <Nav.Link className="city-nav-link" href="/city/tokyo/see-do">
                See & Do
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="city-nav-item">
              <Nav.Link className="city-nav-link" href="/city/tokyo/food">
                Food
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="city-nav-item">
              <Nav.Link className="city-nav-link" href="/city/tokyo/stay">
                Stay
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </>
    );
  }
}
