import React, { Component } from "react";

export default class CityCard extends Component {
  render() {
    return (
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
    );
  }
}
