import React from "react";
import { Card } from "react-bootstrap";

const BlogCardReduced = () => (
  <Card className="blog-card">
    <Card.Img
      className="blog-card-img"
      src={`https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
    ></Card.Img>
    <Card.Body className="blog-cardbody">
      <ul className="blog-taglist">
        <li>
          <a className="blog-tag" href="/">
            TIPS & TRICKS
          </a>
        </li>
      </ul>
      <Card.Text className="blog-title">
        Start Your Trip in Nature
      </Card.Text>
    </Card.Body>
  </Card>
);
export default BlogCardReduced;
