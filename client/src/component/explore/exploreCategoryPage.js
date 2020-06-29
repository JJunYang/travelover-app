import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import PlaceCard from "../shared/placeCard";

export default class ExploreCategoryPage extends Component {
  state = {
    placeList: [],
  };
  componentDidMount() {
    axios
      .get(
        `/explore/place/getPlacesByCategory/${this.props.match.params.category}`
      )
      .then((res) => {
        this.setState({ placeList: res.data });
      });
  }
  render() {
    return (
      <>
        <div className="subpage-topblock">
          <div className="subpage-topblock-container">
            <div className="subpage-topblock-left"></div>
            <div className="subpage-topblock-right">
              {this.props.match.params.category === "see & do" ? (
                <img
                  className="subpage-topblock-pic"
                  alt="top pic"
                  src={`https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                ></img>
              ) : this.props.match.params.category === "food & drink" ? (
                <img
                  className="subpage-topblock-pic"
                  alt="top pic"
                  src={`https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                ></img>
              ) : (
                <img
                  className="subpage-topblock-pic"
                  alt="top pic"
                  src={`https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                ></img>
              )}
            </div>
          </div>
        </div>
        <hr></hr>
        <Container>
          <h2>Place Lists</h2>
          <Row>
            {this.state.placeList.map((item, i) => {
              return (
                <Col className="sub-block-col col-6 clo-md-4 col-lg-3" key={i}>
                  <PlaceCard place={item} />
                </Col>
              );
            })}
            {/* <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
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
            </Col> */}
          </Row>
        </Container>
      </>
    );
  }
}
