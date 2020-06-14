import React, { Component } from "react";
import { Nav, Tab, Col, Row, Table } from "react-bootstrap";
import axios from "axios";
import CenterGroupTourPane from "./centerGroupTourPane";
import CenterHotelPane from "./centerHotelListPane";
import CenterBusPane from "./centerBusPane";
import CenterFlightPane from "./centerFlightPane";

export default class PersonalCenter extends Component {
  state = {
    email: "",
    name: "",
    groupTourList: [],
    flightList: [],
    busList: [],
    hotelList: [],
  };

  componentDidMount() {
    const id = localStorage.getItem("userID");
    axios
      .get("/personalCenter/" + id)
      .then((res) => {
        this.setState({
          email: res.data.email,
          name: res.data.username,
          groupTourList: res.data.groupTourList,
          flightList: res.data.flightList,
          busList: res.data.busList,
          hotelList: res.data.hotelList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="basic">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="basic">Basic Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="grouptour">GroupTour</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bus">BusTickets</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="flight">FlightsTickets</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="hotel">HotelList</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="basic">
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <th>#</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>userEmail:</th>
                      <td>{this.state.email}</td>
                    </tr>
                    <tr>
                      <th>userName:</th>
                      <td>{this.state.name}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="grouptour">
                <CenterGroupTourPane
                  groupTourList={this.state.groupTourList}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="bus">
                <CenterBusPane busList={this.state.busList} />
              </Tab.Pane>
              <Tab.Pane eventKey="flight">
                <CenterFlightPane flightList={this.state.flightList} />
              </Tab.Pane>
              <Tab.Pane eventKey="hotel">
                <CenterHotelPane hotelList={this.state.hotelList} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
