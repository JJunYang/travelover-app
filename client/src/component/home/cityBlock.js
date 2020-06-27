import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import CityCard from "../shared/cityCard";

export default class CityBlock extends Component {
  state = {
    cityList: [],
  };
  componentDidMount() {
    axios.get("/explore/getAllCities").then((response) => {
      console.log(response.data);
      this.setState({ cityList: response.data });
    });
  }
  render() {
    return (
      <Container id="home-cityBlock">
        <h2 className="home-subtitle">Popular Cities</h2>
        <Row>
          {this.state.cityList.map((item, i) => {
            return (
              <Col key={i} className="colCity col-md-3 col-6">
                <CityCard city={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
