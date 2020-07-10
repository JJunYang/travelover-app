import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCardReduced from "../shared/blogCardReduced";
import axios from "axios";
export default class BlogBlock extends Component {
  state = {
    blogList: [],
  };
  componentDidMount() {
    axios.get("/blog/getThreeBlogs").then((res) => {
      // console.log(res.data);
      this.setState({ blogList: res.data });
    });
  }
  render() {
    return (
      <Container id="home-blogBlock">
        <h2 className="home-subtitle">Travel Blog</h2>
        <Row>
          {this.state.blogList.map((blog, i) => {
            return (
              <Col className="blog-col col-md-4 col-6" key={i}>
                <BlogCardReduced item={blog} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
