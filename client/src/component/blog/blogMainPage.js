import React, { Component } from "react";
import "./blog.css";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../shared/blogCard";
import axios from "axios";

export default class BlogMainPage extends Component {
  state = {
    categoryList: [],
    blogList: [],
  };
  async componentDidMount() {
    await axios.get("/blog/getCategoryNum").then((res) => {
      this.setState({ categoryList: res.data });
    });
    await axios
      .get("/blog/getBlogs", {
        params: {
          category: this.props.match.params.category,
        },
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({ blogList: res.data });
      });
  }
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
                {this.state.categoryList.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href={`/blog/${item.category}`}>
                        {item.category}({item.num})
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="blog-main-block"> */}
            <Row>
              {this.state.blogList.map((item, i) => {
                return (
                  <Col className="blog-col col-md-4 col-6" key={i}>
                    <BlogCard item={item}/>
                  </Col>
                );
              })}
            </Row>
            {/* </div> */}
          </Container>
        </div>
      </>
    );
  }
}
