import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import TicketPage from "./ticket/ticketPage";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// import axios from "axios";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://p1-q.mafengwo.net/s16/M00/77/7C/CoUBUl6W-o-APCKAAB5egALLR6A580.png?imageMogr2%2Finterlace%2F1`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>16</strong>/Apr.2020
              </h2>
              <p>Cross Indonesia and ride a motorcycle to the volcano.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://b1-q.mafengwo.net/s16/M00/EF/EB/CoUBUl6VpxGAQZXZABt3WtRcTzg464.png?imageMogr2%2Finterlace%2F1`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>15</strong>/Apr.2020
              </h2>
              <p>Summer in the Netherlands makes the dream life clear.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://p1-q.mafengwo.net/s16/M00/62/5D/CoUBUl6UgG2AXyYjAChqbqtQEEY021.png?imageMogr2%2Finterlace%2F1`}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>15</strong>/Apr.2020
              </h2>
              <p>Yili wind chaser: Pursue fortune in nature.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://b1-q.mafengwo.net/s16/M00/95/A7/CoUBUl6Sw7qAUzCaABgGKhmLqEs982.png?imageMogr2%2Finterlace%2F1`}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>13</strong>/Apr.2020
              </h2>
              <p>The distant place we choose is rich in sunshine.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <TicketPage />
        <Container>
          <br></br>
          <h1>Travel Guide</h1>
          <hr></hr>
          <Card>
            <Card.Body>
              <hr></hr>
              <p style={{ fontSize: "13px" }}>
                <img
                  src={require("../Icon/journal.png")}
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
                        src={require("../Icon/view.png")}
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
                  src={require("../Icon/journal.png")}
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
                        src={require("../Icon/view.png")}
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
        <Container>
          <br></br>
          <h1>Group Tour List</h1>
          <hr></hr>
          <Row>
            <Col xs="4">
              <div
                className="container-fluid"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "400px",
                }}
              >
                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={`http://b1-q.mafengwo.net/s15/M00/06/D4/CoUBGV4xH6eATNjaAAIe-6hwsjA66.jpeg?imageMogr2%2Fthumbnail%2F%21440x260r%2Fgravity%2FCenter%2Fcrop%2F%21440x260%2Fquality%2F100`}
                        className="card-img"
                        alt="Noimage"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Beijing</h5>
                        {/* <p className="card-text">Ancient capital of China</p> */}

                        <p className="card-text">
                          <img
                            src={require("../Icon/date2.png")}
                            style={{ width: "20px", height: "20px" }}
                            alt=""
                          />
                          <small className="text-muted">
                            available untill 5/4
                          </small>
                        </p>
                        <Row>
                          <Col>
                            <h5 className="card-text" style={{ color: "gold" }}>
                              $2000
                            </h5>
                          </Col>
                          <Col>
                            <Link to={`/grouptour/5`}>
                              <button
                                type="button"
                                className="btn btn-info btn-sm"
                                style={{ marginBottom: "20px" }}
                              >
                                Book it!
                              </button>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div
                className="container-fluid"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "400px",
                }}
              >
                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={`http://p1-q.mafengwo.net/s13/M00/DD/8A/wKgEaVzH7YiAcFvzAAD0i01ARZE18.jpeg?imageMogr2%2Fthumbnail%2F%21440x260r%2Fgravity%2FCenter%2Fcrop%2F%21440x260%2Fquality%2F100`}
                        className="card-img"
                        alt="Noimage"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Murmansk</h5>
                        {/* <p className="card-text">It's easy to have an aurora dream</p> */}

                        <p className="card-text">
                          <img
                            src={require("../Icon/date2.png")}
                            alt=""
                            style={{ width: "20px", height: "20px" }}
                          />
                          <small className="text-muted">
                            available untill 6/11
                          </small>
                        </p>
                        <Row>
                          <Col>
                            <h5 className="card-text" style={{ color: "gold" }}>
                              $8860
                            </h5>
                          </Col>
                          <Col>
                            <Link to={`/grouptour/2`}>
                              <button
                                type="button"
                                className="btn btn-info btn-sm"
                                style={{ marginBottom: "20px" }}
                              >
                                Book it!
                              </button>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="4">
              <div
                className="container-fluid"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "400px",
                }}
              >
                <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={`http://n1-q.mafengwo.net/s11/M00/87/B7/wKgBEFtRhjiAQR4eAANznT2XLGE41.jpeg?imageMogr2%2Fthumbnail%2F%21440x260r%2Fgravity%2FCenter%2Fcrop%2F%21440x260%2Fquality%2F100`}
                        className="card-img"
                        alt="Noimage"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Serbia</h5>
                        {/* <p className="card-text">I had come to Yugoslavia to see what history meant in flesh and blood.</p> */}

                        <p className="card-text">
                          <img
                            src={require("../Icon/date2.png")}
                            alt=""
                            style={{ width: "20px", height: "20px" }}
                          />
                          <small className="text-muted">
                            available untill 6/8
                          </small>
                        </p>
                        <Row>
                          <Col>
                            <h5 className="card-text" style={{ color: "gold" }}>
                              $2000
                            </h5>
                          </Col>
                          <Col>
                            <Link to={`/grouptour/4`}>
                              <button
                                type="button"
                                className="btn btn-info btn-sm"
                                style={{ marginBottom: "20px" }}
                              >
                                Book it!
                              </button>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
