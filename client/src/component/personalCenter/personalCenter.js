import React, { Component } from "react";
import { Nav, Tab, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import "./center.css";
import BasicPane from "./basicPane";
import CenterFlightPane from "./centerFlightPane";
import JournalPane from "./journalPane";
import CommentPane from "./commentPane";
import ReviewPane from "./reviewPane";

export default class PersonalCenter extends Component {
  state = {
    email: "",
    name: "",
    flightList: [],
    journalList: [],
    topicList: [],
    reviewList: [],
    commentList: [],
  };

  componentDidMount() {
    const id = sessionStorage.getItem("userID");
    axios
      .get("/personalCenter/" + id)
      .then((res) => {
        this.setState({
          email: res.data.user.email,
          name: res.data.user.username,
          flightList: res.data.user.flightList,
          journalList: res.data.user.journalList,
          reviewList: res.data.reviewList,
          commentList: res.data.commentList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  render() {
    return (
      <Tab.Container defaultActiveKey="basic">
        <Container className="personal-center-block">
          <h2>PersonalCenter</h2>
          <hr></hr>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="basic">Basic Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="flight">Flight</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="journal">Journal & Topic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="review">Review History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="comment">Comment History</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="basic">
                  <BasicPane email={this.state.email} name={this.state.name} />
                </Tab.Pane>
                <Tab.Pane eventKey="flight">
                  <CenterFlightPane flightList={this.state.flightList} />
                </Tab.Pane>
                <Tab.Pane eventKey="journal">
                  <JournalPane
                    journalList={this.state.journalList}
                    topicList={this.state.topicList}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="review">
                  <ReviewPane reviewList={this.state.reviewList} />
                </Tab.Pane>
                <Tab.Pane eventKey="comment">
                  <CommentPane commentList={this.state.commentList} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Container>
      </Tab.Container>
    );
  }
}
