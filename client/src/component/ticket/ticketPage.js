import React, { Component } from "react";
import "./ticketPage.css";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import PlaceCard from "../shared/placeCard";

export default class TicketPage extends Component {
  state = {
    hotelList: [],
  };
  componentDidMount() {
    axios
      .get("/explore/place/getFourHotels")
      .then((res) => {
        this.setState({ hotelList: res.data });
      })
      .then(() => {
        console.log(this.state.hotelList);
      });
  }
  render() {
    return (
      <>
        <div className="subpage-topblock">
          <div className="subpage-topblock-container">
            <div className="subpage-topblock-left"></div>
            <div className="subpage-topblock-right">
              <img
                className="subpage-topblock-pic"
                alt="top pic"
                src={`https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
              ></img>
            </div>
          </div>
        </div>
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
                <Link to={`/explore/place/placeList/stay`}>
                  <Button variant="primary">Search More</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              {this.state.hotelList.map((hotel, i) => {
                return (
                  <Col className="item-col col-6 col-md-4 col-lg-3" key={i}>
                    <PlaceCard place={hotel}></PlaceCard>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
