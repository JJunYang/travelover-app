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
            <Col className="ticket-col-btn-book">
              <Link to={`/tickets/flight`}>
                <Button variant="primary">Search More</Button>
              </Link>
            </Col>
          </Row>
          <Row className="ticket-row-list">
            <Col className="ticket-col col-6 col-md-3">
              <Card className="ticket-card">
                <div className="ticket-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="ticket-card-img"
                    src={`https://images.unsplash.com/photo-1495201050688-bee4686329be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="ticket-card-title">
                    Domestic
                  </Card.Title>
                  <Card.Text className="ticket-card-text">
                    Start from $100
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="ticket-col col-6 col-md-3">
              <Card className="ticket-card">
                <div className="ticket-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="ticket-card-img"
                    src={`https://images.unsplash.com/photo-1566170821470-8c760077e748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="ticket-card-title">Europe</Card.Title>
                  <Card.Text className="ticket-card-text">
                    Start from $1000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="ticket-col col-6 col-md-3">
              <Card className="ticket-card">
                <div className="ticket-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="ticket-card-img"
                    src={`https://images.unsplash.com/photo-1561031601-ad07da1ce656?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="ticket-card-title">
                    Australia
                  </Card.Title>
                  <Card.Text className="ticket-card-text">
                    Start from $600
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="ticket-col col-6 col-md-3">
              <Card className="ticket-card">
                <div className="ticket-card-thumbnail">
                  <Card.Img
                    variant="top"
                    className="ticket-card-img"
                    src={`https://images.unsplash.com/photo-1555085634-91624f601d49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="ticket-card-title">Asia</Card.Title>
                  <Card.Text className="ticket-card-text">
                    Start from $800
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="hotel">
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <h2>Hotel</h2>
            </Col>
            <Col style={{ textAlign: "right", paddingRight: "5%" }}>
              <Link to={`/tickets/hotel`}>
                <Button variant="primary">Make Reservation</Button>
              </Link>
            </Col>
          </Row>
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/domestic_2.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Domestic</Card.Title>
                  <Card.Text>Start from $80/day</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/europe_2.png"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Europe</Card.Title>
                  <Card.Text>Start from $90/day</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/australia_2.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Australia</Card.Title>
                  <Card.Text>Start from $60/day</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/asia_2.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Asia</Card.Title>
                  <Card.Text>Start from $40/day</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
