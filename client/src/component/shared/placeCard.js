import React from "react";
import { Card } from "react-bootstrap";
import "./shared.css";

const PlaceCard = ({ place }) => (
  <Card className="card-place">
    <div className="card-place-thumbnail">
      <Card.Img variant="top" className="card-place-img" src={place.pics[0]} />
    </div>
    <Card.Body>
      <Card.Text className="card-place-term">
        <span className="place-type">{place.type}</span>
        <span className="place-city">{place.city}</span>
      </Card.Text>

      <Card.Title>{place.name}</Card.Title>
      <Card.Text>
        {place.reviewStar} ({place.reviewNum} Reviews)
      </Card.Text>
    </Card.Body>
  </Card>
);
export default PlaceCard;
