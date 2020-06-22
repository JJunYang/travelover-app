import React, { Component } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
export default class StayBlock extends Component {
  render() {
    return (
      <Container>
        <div className="sub-block-title">
          <h2 className="sub-block-name">Stay</h2>
          <a href="/" className="sub-block-seeall">
            See All(5)
          </a>
        </div>
        <Row className="sub-block-row">
          <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
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
          <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
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
          <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
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
          <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
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
      </Container>
    );
  }
}
