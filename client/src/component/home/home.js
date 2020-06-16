import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CarouselBlock from "./carouselItem";
import CityBlock from "./cityBlock";

// import axios from "axios";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBlock />
        <CityBlock />
        <Container>
          <br></br>
          <h1>Travel Guide</h1>
          <hr></hr>
          <Card>
            <Card.Body>
              <hr></hr>
              <p style={{ fontSize: "13px" }}>
                <img
                  src={require("../../Icon/journal.png")}
                  alt=""
                  style={{ width: "12px", height: "12px", marginRight: "10px" }}
                ></img>
                From{" "}
                <span style={{ color: "orange", fontStyle: "italic" }}>
                  national
                </span>
              </p>
              <Card.Title>
                Turkey: Star Moon Country on the Mediterranean
              </Card.Title>
              <Row>
                <Col md={3}>
                  <Image
                    className="card-img-top"
                    src={`http://n1-q.mafengwo.net/s12/M00/FA/85/wKgED1uPPeqACsykAA-1-ckU6zc25.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100`}
                    alt=""
                    style={{ width: "90%", height: "70%" }}
                  />
                  <br></br>
                </Col>
                <Col md={9}>
                  <Card.Text>
                    Every time I travel, I like to go by myself, I don't like to
                    go with a group. It is up to you to walk your own itinerary.
                    You can walk as long as you want. You will find some
                    interesting people and things along the way.Turkey is a
                    country that spans Europe and Asia, bordering the Black Sea
                    in the north, the Mediterranean Sea in the south, Syria and
                    Iraq in the southeast, the Aegean Sea in the west, and
                    Greece and Bulgaria in the east, and Georgia, Armenia,
                    Azerbaijan, and Iran in the east.
                  </Card.Text>
                  <Row style={{ marginTop: "60px" }}>
                    <Col xs={3}>
                      <Link
                        to={`/travelGuideline/details/Turkey: Star Moon Country on the Mediterranean`}
                      >
                        <Button size="sm" variant="primary">
                          View Details
                        </Button>
                      </Link>
                    </Col>
                    <Col xs={{ offset: 5 }}>
                      <Image
                        src={`https://p1-q.mafengwo.net/s12/M00/8A/8D/wKgED1uOhRCAdEg5AAljI7k_SlI00.jpeg?imageMogr2%2Fstrip`}
                        alt=""
                        style={{
                          width: "11px",
                          height: "11px",
                          marginRight: "10px",
                        }}
                        roundedCircle
                      />
                      <span style={{ fontSize: "10px", fontStyle: "italic" }}>
                        author:
                      </span>
                      <Badge style={{ color: "orange", fontStyle: "italic" }}>
                        flower king
                      </Badge>
                      <img
                        src={require("../../Icon/view.png")}
                        alt=""
                        style={{ width: "11px", height: "11px" }}
                      ></img>
                      <span
                        style={{
                          fontSize: "10px",
                          fontStyle: "italic",
                          color: "grey",
                          marginLeft: "3px",
                        }}
                      >
                        views: 293
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <hr></hr>
              <p style={{ fontSize: "13px" }}>
                <img
                  src={require("../../Icon/journal.png")}
                  alt=""
                  style={{ width: "12px", height: "12px", marginRight: "10px" }}
                ></img>
                From{" "}
                <span style={{ color: "orange", fontStyle: "italic" }}>
                  native
                </span>
              </p>
              <Card.Title>Amoy glad to meet you!(Xiamen Trip)</Card.Title>
              <Row>
                <Col md={3}>
                  <Image
                    className="card-img-top"
                    src={`http://p1-q.mafengwo.net/s9/M00/42/8C/wKgBs1hDDBiALSUlAAqYEsdriTw27.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F100`}
                    alt=""
                    style={{ width: "90%", height: "70%" }}
                  />
                  <br></br>
                </Col>
                <Col md={9}>
                  <Card.Text>
                    'The city is at sea, the sea is in the city.' I do not know
                    whether it is because of the sea breeze blowing slowly, the
                    dripping rain showers, or the music and singing spreading in
                    the streets and streets, making the city so quiet for
                    years.The day is full of traffic, and the night is also neon
                    flashing, but there is no noise and noise at all, leaving
                    only a quiet and aromatic heart. Even in a hurry, after
                    stepping on the island, it will unconsciously slow down, and
                    even daze will become so taken for granted. With slow down
                    steps and surprise encounters, enjoy the slow life 'stolen'
                    in this sea garden.
                  </Card.Text>
                  <Row style={{ marginTop: "60px" }}>
                    <Col xs={3}>
                      <Link
                        to={`/travelGuideline/details/Amoy glad to meet you!(Xiamen Trip)`}
                      >
                        <Button size="sm" variant="primary">
                          View Details
                        </Button>
                      </Link>
                    </Col>
                    <Col xs={{ offset: 5 }}>
                      <Image
                        src={`https://n1-q.mafengwo.net/s9/M00/42/95/wKgBs1hDDFyAC8u5ABF6BzjARZY11.jpeg?imageMogr2%2Fstrip`}
                        alt=""
                        style={{
                          width: "11px",
                          height: "11px",
                          marginRight: "10px",
                        }}
                        roundedCircle
                      />
                      <span style={{ fontSize: "10px", fontStyle: "italic" }}>
                        author:
                      </span>
                      <Badge style={{ color: "orange", fontStyle: "italic" }}>
                        little Seven
                      </Badge>
                      <img
                        src={require("../../Icon/view.png")}
                        alt=""
                        style={{ width: "11px", height: "11px" }}
                      ></img>
                      <span
                        style={{
                          fontSize: "10px",
                          fontStyle: "italic",
                          color: "grey",
                          marginLeft: "3px",
                        }}
                      >
                        views: 1033
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}
