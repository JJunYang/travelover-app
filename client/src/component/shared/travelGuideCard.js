import React from "react";
import { Card } from "react-bootstrap";
import "./shared.css";
import { Row, Col, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const TravelGuideCard = ({ item }) => (
  <Card className="travelGuide-card">
    <Link to={`/travelGuides/details/${item._id}`} className="travelGuide-link">
      <hr className="travelGuide-hr"></hr>
      <div className="journal-title">
        <img
          src={process.env.PUBLIC_URL + "/Icon/journal.png"}
          alt="journalIcon"
          className="journal-title-icon"
        ></img>
        <p className="journal-title-content">
          From
          <span className="journal-title-type">{item.type}</span>
        </p>
      </div>
      <Card.Title>{item.title}</Card.Title>
      <Row>
        <Col className="col-md-3 col-12 col-sm-4">
          <img src={item.pic[0]} alt="" className="journal-content-img"></img>
        </Col>
        <Col className="journal-item-block">
          <div className="journal-item-description">{item.description}</div>
          <div className="journal-author-block">
            <Image
              src={item.pic[1]}
              className="journal-author-pic"
              alt="journal-author-pic"
              roundedCircle
            />
            <span className="journal-item-details">
              <span>Author:</span>
              <Badge className="journal-item-username">
                {item.author.username}
              </Badge>
              <img
                src={process.env.PUBLIC_URL + "/Icon/view.png"}
                alt="journal-icon-views"
                className="journal-icon-views"
              ></img>
              <span className="journal-item-views">Views: {item.clickNum}</span>
            </span>
          </div>
        </Col>
      </Row>
    </Link>
  </Card>
);
export default TravelGuideCard;
