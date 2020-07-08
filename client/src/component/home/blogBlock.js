import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCardReduced from "../shared/blogCardReduced";
import BlogCard from "../shared/blogCard";
export default class BlogBlock extends Component {
  render() {
    return (
      <Container id="home-blogBlock">
        <h2 className="home-subtitle">Travel Blog</h2>
        <Row>
          <Col className="blog-col col-md-4 col-6">
            <BlogCardReduced />
          </Col>
          <Col className="blog-col col-md-4 col-6">
            <BlogCardReduced />
          </Col>
          <Col className="blog-col col-md-4 col-6">
            <BlogCard/>
          </Col>
        </Row>
      </Container>
    );
  }
}
