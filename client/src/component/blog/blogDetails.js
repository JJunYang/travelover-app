import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogCardReduced from "../shared/blogCardReduced";
import axios from "axios";
import moment from "moment";

export default class BlogDetails extends Component {
  state = {
    blog: { type: [], author: {}, content: [] },
    recommendBlog: { type: [] },
    relatedBlogs: [],
    categoryList: [],
  };
  componentDidMount() {
    console.log(this.props.match.params._id);
    axios
      .get("/blog/getDetails", { params: { _id: this.props.match.params._id } })
      .then((res) => {
        this.setState({
          blog: res.data.blog,
          recommendBlog: res.data.recommendBlog[0],
          relatedBlogs: res.data.relatedBlogs,
        });
      })
      .then(() => {
        console.log(this.state);
      });
    axios.get("/blog/getCategoryNum").then((res) => {
      this.setState({ categoryList: res.data });
    });
  }
  render() {
    return (
      <>
        <img
          className="d-block w-100 blog-detail-top-pic"
          src={this.state.blog.pic}
          alt="top pic"
        />
        <div className="blog-details-main">
          <Row>
            <Col className="blog-details-leftside col-12 col-lg-8">
              <div className="blog-category-list">
                {this.state.blog.type.map((type, i) => {
                  return (
                    <Link to={`/blog/${type}`} className="blog-link" key={i}>
                      {type}
                    </Link>
                  );
                })}
              </div>
              <h1>{this.state.blog.name}</h1>
              <div className="blog-basic-details">
                <div className="blog-author-info">
                  <span>by</span>
                  <span className="blog-author-name">
                    {this.state.blog.author.username}
                  </span>
                </div>
                <div className="blog-date">
                  {moment(this.state.blog.date).format("ll")}
                </div>
              </div>
              {this.state.blog.content.map((p, i) => {
                return (
                  <div className="blog-paragragh" key={i} id={`${p._id}`}>
                    <p>{p.content}</p>
                    <img src={p.pic} className="blog-paragraph-pic" alt=""></img>
                  </div>
                );
              })}
              <hr></hr>
              <div className="blog-related-article">
                <h3>Related Articles</h3>
                <Row>
                  {this.state.relatedBlogs.map((blog, i) => {
                    return (
                      <Col className="blog-col col-md-4 col-6" key={i}>
                        <BlogCardReduced item={blog} />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
            <Col className="blog-details-rightside col-12 col-lg-4">
              <Container className="blog-category-alllist">
                <h4 className="blog-category-title">Category</h4>
                <ul className="blog-category-ul">
                  {this.state.categoryList.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link to={`/blog/${item.category}`}>
                          {item.category} <span>({item.num})</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Container>
              <hr></hr>
              <Container className="blog-recommend-block">
                <h4 className="blog-recommend-title">Recommend Article</h4>
                <BlogCardReduced item={this.state.recommendBlog} />
              </Container>
              <hr></hr>
              <Container className="blog-content">
                <h4 className="blog-content-title">Blog content</h4>
                <ul className="blog-content-ul">
                  {this.state.blog.content.map((p, i) => {
                    return (
                      <li key={i}>
                        <a href={`#${p._id}`}>{i + 1} / moren</a>
                      </li>
                    );
                  })}
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
