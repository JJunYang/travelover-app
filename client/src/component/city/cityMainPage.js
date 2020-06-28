import React, { Component } from "react";
import "./cityMainPage.css";
import { Container, Col, Row } from "react-bootstrap";
import CityPageNav from "./cityPageNav";
import ExploreBlock from "./exploreBlock";
import FoodBlock from "./foodBlock";
import SeeBlock from "./seeBlock";
import StayBlock from "./stayBlock";
import axios from "axios";

export default class CityMainPage extends Component {
  state = {
    city: {
      country: {},
    },
    otherFourCities: [],
    foodList: [],
    seeList: [],
    stayList: [],
  };
  componentDidMount() {
    axios
      .get(
        `/explore/city/${this.props.match.params.cityName}&${this.props.match.params._id}`
      )
      .then((res) => {
        this.setState({
          city: res.data.city,
          otherFourCities: res.data.cityList,
          foodList: res.data.foodList,
          seeList: res.data.seeList,
          stayList: res.data.stayList,
        });
      })
      .then(() => {
        console.log(this.state);
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
            <div className="countryName">{this.state.city.country.name}</div>
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
         <FoodBlock
          placeList={this.state.foodList}
          cityName={this.state.city.name}
          cityId={this.state.city._id}
        />
        <SeeBlock
          placeList={this.state.seeList}
          cityName={this.state.city.name}
          cityId={this.state.city._id}
        />
        <StayBlock
          placeList={this.state.stayList}
          cityName={this.state.city.name}
          cityId={this.state.city._id}
        />
        <ExploreBlock cityList={this.state.otherFourCities} />
      </>
    );
  }
}
