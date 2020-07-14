import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import TopicCardReduced from "../shared/topicCardReduced";
export default class TopicBlock extends Component {
  state = {
    topicList: [],
  };
  componentDidMount() {
    axios.get("/topic/getThreeTopics").then((res) => {
      // console.log(res.data);
      this.setState({ topicList: res.data });
    });
  }
  render() {
    return (
      <Container id="home-topicBlock">
        <h2 className="home-subtitle">Travel topic</h2>
        <Row>
          {this.state.topicList.map((topic, i) => {
            return (
              <Col className="topic-col col-md-4 col-6" key={i}>
                <TopicCardReduced item={topic} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
