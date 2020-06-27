import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import PlaceCard from "../shared/placeCard";
import CityPageNav from "./cityPageNav";

export default class CityFoodPage extends Component {
  state = {
    city: {},
    foodList: [],
  };
  componentDidMount() {
    axios
      .get(
        `/explore/city/${this.props.match.params.cityName}&${this.props.match.params._id}`
      )
      .then((res) => {
        this.setState({
          city: res.data.city,
          foodList: res.data.foodList,
        });
      })
      .then(() => {
        console.log(this.state.city);
      });
  }
  render() {
    return (
      <>
        <div className="city-title">
          <img
            className="city-title-pic"
            src={this.state.city.representPic}
            alt="title pic"
          ></img>
          <div className="city-title-titleInfo">
            <div className="countryName">{this.state.city.country}</div>
            <div className="city-title-city">{this.state.city.name}</div>
          </div>
        </div>

        <div className="city-information">
          <Container className="info-details">
            <Row>
              <Col className="col-12 col-xl-6 info-introducing">
                <h2>Introducing</h2>
                <p className="info-description">
                  {this.state.city.introducing}
                </p>
              </Col>
              <Col className="col-12 col-xl-6">
                <ul className="detail-list">
                  <li>
                    <strong>Currency</strong>
                    <span className="currency">{this.state.city.currency}</span>
                  </li>
                  <li>
                    <strong>language</strong>
                    <span className="language">{this.state.city.language}</span>
                  </li>
                  <li>
                    <strong>Best time vist</strong>
                    <span className="time">
                      {this.state.city.bestTimeVisit}
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <CityPageNav city={this.state.city} />
        <hr style={{ marginTop: "5px" }}></hr>
        <Container>
          <div className="sub-block-title">
            <h2 className="sub-block-name">Food & Drink</h2>
            <div className="sub-block-seeall">
              All({this.state.foodList.length})
            </div>
          </div>
          <Row className="sub-block-row">
            {this.state.foodList.map((item, i) => {
              return (
                <Col key={i} className="sub-block-col col-6 clo-md-4 col-lg-3">
                  <PlaceCard place={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
