import React from "react";
import { Card } from "react-bootstrap";

const BlogCard2 = () => (
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
      <Card.Text className="blog-title">Start Your Trip in Nature</Card.Text>
      <div className="blog-author-info">
        <div className="blog-author">
          <span>by</span>
          <span className="blog-author-name">Jun</span>
        </div>
        <span>0</span>
        <span>Comments</span>
      </div>
      <Card.Text className="blog-content">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by…
      </Card.Text>
      <div className="blog-readmore-btn">
        <a href="/">Read more</a>
      </div>
    </Card.Body>
  </Card>
);
export default BlogCard2;
