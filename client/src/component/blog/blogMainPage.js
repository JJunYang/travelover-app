import React, { Component } from "react";
import "./blog.css";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../shared/blogCard";

export default class BlogMainPage extends Component {
  render() {
    return (
      <>
        <div className="blog-top">
          <div className="blog-top-block">
            <div className="blog-top-left">
              <h1 className="blog-note">Blog</h1>
              <p className="blog-slogan">Share Your Story Now!</p>
            </div>
            <img
              className="blog-top-pic"
              alt="top pic"
              src={`https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
            ></img>
          </div>

          <Container className="blog-content-block">
            <div className="blog-nav-block">
              <ul className="list-category">
                <li>All(15)</li>
                <li>TIPS & TRICKS (6)</li>
                <li>Beaches (4)</li>
                <li>take a break (3)</li>
                <li>road trip (6)</li>
                <li>unique stay (6)</li>
              </ul>
            </div>
            {/* <div className="blog-main-block"> */}
              <Row>
                <Col className="blog-col col-md-4 col-6">
                  <BlogCard />
                </Col>
              </Row>
            {/* </div> */}
          </Container>
        </div>
      </>
    );
  }
}
