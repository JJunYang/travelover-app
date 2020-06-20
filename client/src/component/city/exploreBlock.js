import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default class ExploreBlock extends Component {
  render() {
    return (
      <div id="exploreOtherCity">
        <Container>
            <h2 className="explore-title">Explore Other Cities</h2>
          <Row className="explore-row">
            <Col className="colCity col-md-3 col-6">
              <Card className="cardCity">
                <Card.Img
                  className="home-card-img"
                  src={`https://images.unsplash.com/photo-1522850959516-58f958dde2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">JAPAN</Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">Tokyo</span>
                    <br />
                    <span className="card-city-placeNums">15 places</span>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="colCity col-md-3 col-6">
              <Card className="cardCity">
                <Card.Img
                  className="home-card-img"
                  src={`https://images.unsplash.com/photo-1535356795203-50b2eb73f96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">CHINA</Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">Shanghai</span>
                    <br />
                    <span className="card-city-placeNums">15 places</span>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="colCity col-md-3 col-6">
              <Card className="cardCity">
                <Card.Img
                  className="home-card-img"
                  src={`https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">
                    UNITED STATES
                  </Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">Boston</span>
                    <br />
                    <span className="card-city-placeNums">15 places</span>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col className="colCity col-md-3 col-6">
              <Card className="cardCity">
                <Card.Img
                  className="home-card-img"
                  src={`https://images.unsplash.com/photo-1506598417715-e3c191368ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">
                    UNITED STATES
                  </Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">New York</span>
                    <br />
                    <span className="card-city-placeNums">15 places</span>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
