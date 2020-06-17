import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./cityBlock.css";

export default class CityBlock extends Component {
  render() {
    return (
      <Container id="home-cityBlock">
          <h2>Popularities</h2>
          <Row>
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
            <Col className="colCity col-md-3 col-6">
              <Card className="cardCity">
                <Card.Img
                  className="home-card-img"
                  src={`https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">
                    UNITED KINGDOM
                  </Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">London</span>
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
                  src={`https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">FRANCE</Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">Paris</span>
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
                  src={`https://images.unsplash.com/photo-1546228139-87f5312cac42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">THAILAND</Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">Bangkok</span>
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
                  src={`https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-city-title">AUSTRALIA</Card.Title>
                  <Card.Text className="country">
                    <span className="card-city-name">Sydney</span>
                    <br />
                    <span className="card-city-placeNums">15 places</span>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
      </Container>
    );
  }
}
