import React, { Component } from "react";
import { Nav, Tab, Col, Row, Table, Container } from "react-bootstrap";
import axios from "axios";
import "./center.css";
import BasicPane from "./basicPane";
import CenterFlightPane from "./centerFlightPane";
import SavePane from "./savePane";

export default class PersonalCenter extends Component {
  state = {
    email: "",
    name: "",
    flightList: [],
  };

  componentDidMount() {
    const id = sessionStorage.getItem("userID");
    axios
      .get("/personalCenter/" + id)
      .then((res) => {
        this.setState({
          email: res.data.email,
          name: res.data.username,
          flightList: res.data.flightList,
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
                  <Nav.Link eventKey="journal">Journal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="journal">Topic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="love">Love</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="history">Comment History</Nav.Link>
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
                <Tab.Pane eventKey="love">
                  <SavePane flightList={this.state.flightList} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Container>
      </Tab.Container>
    );
  }
}
