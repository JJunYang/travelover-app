import React, { Component } from "react";
import "./topic.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import TopicCard from "../shared/topicCard";

export default class TopicMainPage extends Component {
  state = {
    categoryList: [],
    topicList: [],
  };
  async componentDidMount() {
    await axios.get("/topic/getCategoryNum").then((res) => {
      this.setState({ categoryList: res.data });
    });
    await axios
      .get("/topic/getTopics", {
        params: {
          category: this.props.match.params.category,
        },
      })
      .then((res) => {
        this.setState({ topicList: res.data });
      });
  }
  render() {
    return (
      <>
        <div className="topic-top">
          <div className="topic-top-block">
            <div className="topic-top-left">
              <h1 className="topic-note">Topic</h1>
              <p className="topic-slogan">Share Your Story Now!</p>
            </div>
            <img
              className="topic-top-pic"
              alt="top pic"
              src={`https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
            ></img>
          </div>
        </div>

        <Container className="topic-content-block">
          <div className="topic-nav-block">
            <ul className="list-category">
              {this.state.categoryList.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={`/topic/${item.category}`}>
                      {item.category}({item.num})
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Row>
            {this.state.topicList.map((item, i) => {
              return (
                <Col className="topic-col col-md-4 col-6" key={i}>
                  <TopicCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
