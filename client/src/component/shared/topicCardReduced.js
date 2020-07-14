import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopicCardReduced = ({ item }) => (
  <Card className="topic-card">
    <Card.Img className="topic-card-img" src={item.pic}></Card.Img>
    <Card.Body className="topic-cardbody">
      <ul className="topic-taglist">
        {item.type.map((type, i) => {
          return (
            <li key={i}>
              <Link to={`/topic/${type}`} className="topic-tag">
                {type}
              </Link>
            </li>
          );
        })}
      </ul>
      <Card.Text className="topic-title">
        <Link to={`/topic/details/${item._id}`}>{item.name}</Link>
      </Card.Text>
    </Card.Body>
  </Card>
);
export default TopicCardReduced;
