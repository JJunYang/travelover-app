import React from "react";
import { Card, Image } from "react-bootstrap";
import "./shared.css";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => (
  <Card className="card-place">
    <div className="card-place-thumbnail">
      <Card.Img variant="top" className="card-place-img" src={place.pics[0]} />
    </div>
    <Card.Body>
      <Card.Text className="card-place-term">
        <span className="place-type">{place.type}</span>
        <span className="place-city">{place.city.name}</span>
      </Card.Text>

      <Card.Title>
        <Link to={`/explore/place/${place.category}/${place._id}`}>
          {place.name}
        </Link>
      </Card.Title>
      <Card.Text>
        {place.reviewStar}
        <Image
          src={process.env.PUBLIC_URL + "/Icon/fullstar.png"}
          className="review-star-pic"
        />
        ({place.reviewNum} Reviews)
      </Card.Text>
    </Card.Body>
  </Card>
);
export default PlaceCard;
