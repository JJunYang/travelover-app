import React, { Component } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

export default class Flight extends Component {
  state = {
    flightList: [],
    from: "",
    to: "",
  };

  componentDidMount() {
    this.getFlight();
  }

  getFlight = async () => {
    axios
      .get("/tickets/flight", {
        params: {
          from: this.state.from,
          to: this.state.to,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((json) => {
        this.setState({ flightList: json });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClickBtn = (e) => {
    e.preventDefault();
    let fvalue = document.getElementById("exampleForm.ControlInput1").value;
    if (!fvalue) {
      fvalue = "";
    }

    let tvalue = document.getElementById("exampleForm.ControlInput2").value;
    if (!tvalue) {
      tvalue = "";
    }
    this.setState(
      {
        from: fvalue,
        to: tvalue,
      },
      () => {
        console.log(this.state.from);
        this.setState({
          flightList: [],
        });
        this.getFlight();
      }
    );
  };

  render() {
    return (
      <div
        id="flight_ticket"
        style={{ paddingTop: "3%", paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h1>Book Flight Ticket</h1>
        <hr></hr>
        <div
          className="InputBox"
          style={{ paddingTop: "3%", paddingLeft: "10%", paddingRight: "10%" }}
        >
          <Form>
            <Row>
              <Col
                style={{
                  paddingTop: "10px",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Where From?</Form.Label>
                  <Form.Control type="text" placeholder="city name" />
                </Form.Group>
              </Col>
              <Col
                style={{
                  paddingTop: "10px",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Where To?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="city name"
                    className="box2"
                  />
                </Form.Group>
              </Col>
              <Col
                style={{
                  paddingTop: "10px",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                <Button
                  variant="primary"
                  type="button"
                  onClick={(e) => this.handleClickBtn(e)}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div
          className="flightTable"
          style={{
            paddingTop: "3%",
            paddingLeft: "10%",
            paddingRight: "10%",
            textAlign: "center",
          }}
        >
          <Table responsive style={{ paddingLeft: "15%", paddingRight: "15%" }}>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.flightList.map((result, key) => {
                return (
                  <tr key={key}>
                    <td>{result.from}</td>
                    <td>{result.to}</td>
                    <td>{moment(result.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                    <td>{result.price}</td>
                    {localStorage.getItem("userName") === "" ||
                    localStorage.getItem("userName") === null ? (
                      ""
                    ) : (
                      <td>
                        <Link to={`/tickets/flight/paypal/${result._id}`}>
                          <button
                            type="button"
                            className="btn btn-info btn-sm"
                            style={{ marginBottom: "20px" }}
                          >
                            Buy Ticket
                          </button>
                        </Link>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
