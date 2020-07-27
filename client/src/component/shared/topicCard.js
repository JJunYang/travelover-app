import React from "react";
import "./shared.css";
import { Card } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";

const TopicCard = ({ item }) => (
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
      <div className="topic-author-info">
        <div className="topic-author">
          <span>by</span>
          <span className="topic-author-name">{item.author.username}</span>
        </div>
        <span>{moment(item.date).format("ll")}</span>
      </div>
      <Card.Text className="topic-content">
        {item.content.slice(0, 100)}...
      </Card.Text>
      <div className="topic-readmore-btn">
        <Link to={`/topic/details/${item._id}`}>Read more</Link>
      </div>
    </Card.Body>
  </Card>
);
export default TopicCard;
