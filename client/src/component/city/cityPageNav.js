import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CityPageNav extends Component {
  render() {
    return (
      <>
        <Container>
          <Nav className="city-nav">
            <Nav.Item className="city-nav-item">
              <Link
                className="city-nav-link"
                to={`/explore/city/${this.props.city.name}&${this.props.city._id}`}
              >
                <img
                  src={process.env.PUBLIC_URL + "/Icon/city.png"}
                  alt="icon-city"
                  className="city-icon"
                ></img>
                {this.props.city.name}
              </Link>
            </Nav.Item>
            <Nav.Item>|</Nav.Item>
            <Nav.Item className="city-nav-item">
              <Link
                className="city-nav-link"
                to={`/explore/city/${this.props.city.name}&${this.props.city._id}/see-do`}
              >
                See & Do
              </Link>
            </Nav.Item>
            <Nav.Item className="city-nav-item">
              <Link
                className="city-nav-link"
                to={`/explore/city/${this.props.city.name}&${this.props.city._id}/food-drink`}
              >
                Food & Drink
              </Link>
            </Nav.Item>
            <Nav.Item className="city-nav-item">
              <Link
                className="city-nav-link"
                to={`/explore/city/${this.props.city.name}&${this.props.city._id}/stay`}
              >
                Stay
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </>
    );
  }
}
