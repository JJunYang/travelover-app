import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => (
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
      <div className="blog-author-info">
        <div className="blog-author">
          <span>by</span>
          <span className="blog-author-name">{item.author.username}</span>
        </div>
        <span>{moment(item.date).format("ll")}</span>
      </div>
      <Card.Text className="blog-content">
        {item.content[0].content.slice(0, 100)}...
      </Card.Text>
      <div className="blog-readmore-btn">
        <Link to={`/blog/details/${item._id}`}>Read more</Link>
      </div>
    </Card.Body>
  </Card>
);
export default BlogCard;
