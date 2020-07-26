import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./explore.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CityCard from "../shared/cityCard";
import TopicCardReduced from "../shared/topicCardReduced";

export default class ExploreMainPage extends Component {
  state = {
    placeNum: [],
    cityList: [],
    topicList: [],
  };
  componentDidMount() {
    axios.get("/explore/place/getPlaceNumByCategory").then((res) => {
      this.setState({ placeNum: res.data });
    });
    axios.get("/explore/getAllCities").then((res) => {
      this.setState({ cityList: res.data });
    });
    axios.get("/topic/getThreeTopics").then((res) => {
      this.setState({ topicList: res.data });
    });
  }
  render() {
    return (
      <>
        <div className="explore-top-block"></div>
        <div className="explore-top-cover">
          <div className="explore-top-cover-block"></div>
        </div>
        <Container className="explore-category-block">
          <h2 className="explore-category-title">Explore By </h2>
          <hr className="explore-hr"></hr>
          <Row>
            {this.state.placeNum.map((item, i) => {
              return (
                <Col className="col-6 col-md-4 explore-category-detail" key={i}>
                  <Link
                    to={`/explore/place/placeList/${item.category}`}
                    className={`detail-block-${item.abbr}`}
                  >
                    <div className="category-content">
                      <h3>{item.category}</h3>
                      <p>{item.num} places</p>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="explore-middle">
          <div className="explore-middle-block"></div>
        </div>
        <div className="explore-popular-city">
          <Container>
            <h2 className="explore-city-title">Popular Cities</h2>
            <hr className="explore-hr"></hr>
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
        </div>
        <div className="explore-popular-topic">
          <div className="explore-botton-cover-block">
            <h2 className="home-subtitle">Travel Inspiration</h2>
            <hr className="explore-hr"></hr>
          </div>
          <Container className="explore-topic">
            <Row>
              {this.state.topicList.map((topic, i) => {
                return (
                  <Col className="topic-col col-md-4 col-6" key={i}>
                    <TopicCardReduced item={topic} />
                  </Col>
                );
              })}
            </Row>
            <Link to={`/topic/all`} className="explore-btn">
              <Button variant="primary" className="explore-btn-view-more">
                View More
              </Button>
            </Link>
          </Container>
        </div>
      </>
    );
  }
}
