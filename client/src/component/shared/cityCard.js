import React from "react";
import { Card } from "react-bootstrap";

const CityCard = ({ city }) => (
  <Card className="cardCity">
    <a href={`/explore/city/${city.name}&${city._id}`} className="img-block">
      <Card.Img src={city.representPic} alt="Card image" />
    </a>
    <div className="card-country">{city.country}</div>
    <div className="card-city">
      <span className="card-city-name">
        <a href={`/explore/city/${city.name}&${city._id}`}>{city.name}</a>
      </span>
      <br />
      <span className="card-city-placeNums">{city.placeNum} places</span>
    </div>
  </Card>
);

export default CityCard;
