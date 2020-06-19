import React, { Component } from "react";
import "./cityMainPage.css";
import { Container, Col, Row } from "react-bootstrap";
import CityPageNav from "./cityPageNav";

export default class CityMainPage extends Component {
  render() {
    return (
      <>
        <div className="city-title">
          <img
            className="city-title-pic"
            src={`https://images.unsplash.com/photo-1578637387939-43c525550085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
            alt="title pic"
          ></img>
          <div className="city-title-titleInfo">
            <div className="countryName">JAPAN</div>
            <div className="city-title-city">Tokyo</div>
          </div>
        </div>

        <div className="city-information">
          <Container className="info-details">
            <Row>
              <Col className="col-12 col-xl-6">
                <h2>Introducing</h2>
                <p className="info-description">
                  Tokyo (東京, Tōkyō) is Japan’s capital and the world’s most
                  populous metropolis. It is also one of Japan’s 47 prefectures,
                  consisting of 23 central city wards and multiple cities, towns
                  and villages west of the city center. The Izu and Ogasawara
                  Islands are also part of Tokyo.
                </p>
              </Col>
              <Col className="col-12 col-xl-6">
                <ul className="detail-list">
                  <li>
                    <strong>Currency</strong>
                    <span className="currency">Yen</span>
                  </li>
                  <li>
                    <strong>language</strong>
                    <span className="language">Japanish</span>
                  </li>
                  <li>
                    <strong>Best time vist</strong>
                    <span className="time">Anytime</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <CityPageNav />
        <hr style={{marginTop:"5px"}}></hr>
      </>
    );
  }
}
