import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CityCard from "../shared/cityCard";

export default class ExploreBlock extends Component {
  render() {
    return (
      <div id="exploreOtherCity">
        <Container>
          <h2 className="explore-title">
            Explore Other Cities
          </h2>
          <Row className="explore-row">
            {this.props.cityList.map((item, i) => {
              return (
                <Col key={i} className="colCity col-md-3 col-6">
                  <CityCard city={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
