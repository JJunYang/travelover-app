import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCardReduced = ({ item }) => (
  <Card className="blog-card">
    <Card.Img className="blog-card-img" src={item.pic}></Card.Img>
    <Card.Body className="blog-cardbody">
      <ul className="blog-taglist">
        {item.type.map((type, i) => {
          return (
            <li key={i}>
              <Link to={`/blog/${type}`} className="blog-tag">
                {type}
              </Link>
            </li>
          );
        })}
      </ul>
      <Card.Text className="blog-title">
        <Link to={`/blog/details/${item._id}`}>{item.name}</Link>
      </Card.Text>
    </Card.Body>
  </Card>
);
export default BlogCardReduced;
