import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogCardReduced from "../shared/blogCardReduced";
import BlogCard from "../shared/blogCard";

export default class BlogDetails extends Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100 blog-detail-top-pic"
          src={`https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
          alt="top pic"
        />
        <div className="blog-details-main">
          <Row>
            <Col className="blog-details-leftside col-12 col-lg-8">
              <div className="blog-category-list">
                <Link to="/" className="blog-link">
                  road trip
                </Link>
                <Link to="/" className="blog-link">
                  road trip
                </Link>
              </div>
              <h1>Why you should visit turkey</h1>
              <div className="blog-basic-details">
                <div className="blog-author-info">
                  <span>by</span>
                  <span className="blog-author-name">Jun</span>
                </div>
                <div className="blog-date">November 1 2019</div>
                {/* <div className="blog-comments">0 Comments</div> */}
              </div>
              <div className="blog-paragragh">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn’t anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
                <img
                  src={`https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  className="blog-paragraph-pic"
                  alt="paragraph pic"
                ></img>
              </div>
              <hr></hr>
              <div className="blog-related-article">
                <h3>Related Articles</h3>
                <Row>
                  <Col className="blog-col col-md-4 col-6">
                    <BlogCardReduced />
                  </Col>
                  <Col className="blog-col col-md-4 col-6">
                    <BlogCardReduced />
                  </Col>
                  <Col className="blog-col col-md-4 col-6">
                    <BlogCard />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="blog-details-rightside col-12 col-lg-4">
              <Container className="blog-category-alllist">
                <h4 className="blog-category-title">Category</h4>
                <ul className="blog-category-ul">
                  <li>
                    <a href="/">
                      road trip <span>(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      road trip <span>(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      road trip <span>(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      road trip <span>(3)</span>
                    </a>
                  </li>
                </ul>
              </Container>
              <hr></hr>
              <Container className="blog-recommend-block">
                <h4 className="blog-recommend-title">Recommend Article</h4>
                <BlogCardReduced />
              </Container>
              <hr></hr>
              <Container className="blog-content">
                <h4 className="blog-content-title">Blog content</h4>
                <ul className="blog-content-ul">
                  <li>
                    <a href="/">1/ moren</a>
                  </li>
                  <li>
                    <a href="/">1/ moren</a>
                  </li>
                  <li>
                    <a href="/">1/ moren</a>
                  </li>
                  <li>
                    <a href="/">1/ moren</a>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
        </div>
        <hr></hr>
      </>
    );
  }
}
