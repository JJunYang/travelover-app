import React, { Component } from "react";
import "./ticketPage.css";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

export default class TicketPage extends Component {
  render() {
    return (
      <Container id="ticketPage">
        <h2>Tickets and Hotel</h2>
        <hr></hr>
        <div id="flight">
          <Row>
            <Col>
              <h3>Flight</h3>
            </Col>
            <Col className="item-col-btn-book">
              <Link to={`/tickets/flight`}>
                <Button variant="primary">Search More</Button>
              </Link>
            </Col>
          </Row>
          <Row className="item-row-list">
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-card-img"
                    src={`https://images.unsplash.com/photo-1495201050688-bee4686329be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="item-card-title">
                    Domestic
                  </Card.Title>
                  <Card.Text className="item-card-text">
                    Start from $100
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-card-img"
                    src={`https://images.unsplash.com/photo-1566170821470-8c760077e748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="item-card-title">Europe</Card.Title>
                  <Card.Text className="item-card-text">
                    Start from $1000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-card-img"
                    src={`https://images.unsplash.com/photo-1561031601-ad07da1ce656?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="item-card-title">
                    Australia
                  </Card.Title>
                  <Card.Text className="item-card-text">
                    Start from $600
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-card-img"
                    src={`https://images.unsplash.com/photo-1555085634-91624f601d49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="item-card-title">Asia</Card.Title>
                  <Card.Text className="item-card-text">
                    Start from $800
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="hotel">
          <Row>
            <Col>
              <h2>Hotel</h2>
            </Col>
            <Col className="item-col-btn-book">
              <Link to={`/tickets/hotel`}>
                <Button variant="primary">Search More</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-hotel-img"
                    src={`https://cf.bstatic.com/images/hotel/max1280x900/107/107458730.jpg`}
                  />
                </div>
                <Card.Body>
                  <Card.Text className="item-place-term">
                    <span className="place-type">Hotel</span>
                    <span className="place-city">Boston</span>
                  </Card.Text>

                  <Card.Title>Boston Marriott Copley Place</Card.Title>
                  <Card.Text>8.7 (4 Reviews)</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-hotel-img"
                    src={`https://cf.bstatic.com/images/hotel/max1280x900/173/173745332.jpg`}
                  />
                </div>
                <Card.Body>
                  <Card.Text className="item-place-term">
                    <span className="place-type">Hotel</span>
                    <span className="place-city">Boston</span>
                  </Card.Text>
                  <Card.Title>YOTEL Boston</Card.Title>
                  <Card.Text>4.0 (3 Reviews)</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-hotel-img"
                    src={`https://cf.bstatic.com/images/hotel/max1280x900/155/155685471.jpg`}
                  />
                </div>
                <Card.Body>
                  <Card.Text className="item-place-term">
                    <span className="place-type">Apartments</span>
                    <span className="place-city">Boston</span>
                  </Card.Text>
                  <Card.Title>Global Luxury Suites Downtown Boston</Card.Title>
                  <Card.Text>4.0 (3 Reviews)</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="item-col col-6 col-md-4 col-lg-3">
              <Card className="item-card">
                <div className="item-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="item-hotel-img"
                    src={`https://cf.bstatic.com/images/hotel/max1024x768/395/39532183.jpg`}
                  />
                </div>
                <Card.Body>
                  <Card.Text className="item-place-term">
                    <span className="place-type">Hotel</span>
                    <span className="place-city">Los Angeles</span>
                  </Card.Text>
                  <Card.Title>Titta Inn</Card.Title>
                  <Card.Text>4.0 (3 Reviews)</Card.Text>
                </Card.Body>
              </Card>
            </Col>
           
          </Row>
        </div>
      </Container>
    );
  }
}
