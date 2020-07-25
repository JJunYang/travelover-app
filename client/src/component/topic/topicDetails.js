import React, { Component } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import TopicCardReduced from "../shared/topicCardReduced";
import CommentDetail from "../shared/commentDetail";

export default class TopicDetails extends Component {
  state = {
    topic: { type: [], author: {}, content: [], commentList: [] },
    recommendTopic: { type: [] },
    relatedTopics: [],
    categoryList: [],
    pList: [],
    newComment: "",
  };
  componentDidMount() {
    console.log(this.props.match.params._id);
    axios
      .get("/topic/getDetails", {
        params: { _id: this.props.match.params._id },
      })
      .then((res) => {
        this.setState({
          topic: res.data.topic,
          recommendTopic: res.data.recommendTopic[0],
          relatedTopics: res.data.relatedTopics,
          pList: res.data.pList,
        });
      })
      .then(() => {
        console.log(this.state);
      });
    axios.get("/topic/getCategoryNum").then((res) => {
      this.setState({ categoryList: res.data });
    });
    // var text=$(".topic-paragragh").text();
    // var des=text.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
    // $(".topic-paragragh").empty();
    // $(".topic-paragragh").append(des);
  }
  handleSubmitComment = (e) => {
    e.preventDefault();
    axios
      .post("/add/newComment", {
        topic: this.state.topic,
        content: this.state.newComment,
      })
      .then(() => {
        const pathname = this.props.location.pathname;
        this.props.history.replace("/reload");
        setTimeout(() => {
          this.props.history.replace(pathname);
        });
      });
  };
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <img
          className="d-block w-100 topic-detail-top-pic"
          src={this.state.topic.pic}
          alt="top pic"
        />
        <Container className="topic-details-main">
          <Row>
            <Col className="topic-details-leftside col-12 col-lg-8">
              <div className="topic-category-list">
                {this.state.topic.type.map((type, i) => {
                  return (
                    <Link to={`/topic/${type}`} className="topic-link" key={i}>
                      {type}
                    </Link>
                  );
                })}
              </div>
              <h1>{this.state.topic.name}</h1>
              <div className="topic-basic-details">
                <div className="topic-author-info">
                  <span>by</span>
                  <span className="topic-author-name">
                    {this.state.topic.author.username}
                  </span>
                </div>
                <div className="topic-date">
                  {moment(this.state.topic.date).format("ll")}
                </div>
              </div>
              {this.state.pList.map((p, i) => {
                return (
                  <div className="topic-paragragh" key={i}>
                    <p>{p}</p>
                  </div>
                );
              })}
              <hr></hr>
              <div className="topic-comment-block">
                <Form onSubmit={this.handleSubmitComment}>
                  <div className="topic-comment-note">
                    Leave your comment here
                  </div>
                  <textarea
                    id="topic-comment"
                    name="newComment"
                    cols="45"
                    rows="7"
                    required
                    onChange={this.handleChange}
                    placeholder="Comment"
                  ></textarea>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                </Form>
              </div>

              <hr></hr>
              {this.state.topic.commentList.map((comment, i) => {
                return <CommentDetail comment={comment} key={i} />;
              })}
              <div className="topic-related-article">
                <h3>Related Articles</h3>
                <Row>
                  {this.state.relatedTopics.map((topic, i) => {
                    return (
                      <Col className="topic-col col-md-4 col-6" key={i}>
                        <TopicCardReduced item={topic} />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
            <Col className="topic-details-rightside col-12 col-lg-4">
              <Container className="topic-category-alllist">
                <h4 className="topic-category-title">Category</h4>
                <ul className="topic-category-ul">
                  {this.state.categoryList.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link to={`/topic/${item.category}`}>
                          {item.category} <span>({item.num})</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Container>
              <hr></hr>
              <Container className="topic-recommend-block">
                <h4 className="topic-recommend-title">Recommend Article</h4>
                <TopicCardReduced item={this.state.recommendTopic} />
              </Container>
              <hr></hr>
            </Col>
          </Row>
        </Container>
        <hr></hr>
      </>
    );
  }
}
