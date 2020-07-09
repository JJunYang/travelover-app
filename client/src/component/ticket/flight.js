import React, { Component } from "react";
import { Table, Form, Row, Col, Button, Container } from "react-bootstrap";
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
      <Container id="flight_ticket">
        <h2>Book Flight Ticket</h2>
        <hr></hr>
        <Form className="ticket-form">
          <Row className=" ticket-form-row">
            <Col className="col-10 col-md-3">
              <Form.Group controlId="From">
                <Form.Label>Where From?</Form.Label>
                <Form.Control type="text" placeholder="city name" />
              </Form.Group>
            </Col>
            <Col className="col-10 col-md-3">
              <Form.Group controlId="To">
                <Form.Label>Where To?</Form.Label>
                <Form.Control type="text" placeholder="city name" />
              </Form.Group>
            </Col>
            <Col className="col-3 col-md-2 ticket-form-btnCol">
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
        <div id="flightTable">
          <Table responsive>
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
                    <td className="ticket-from">{result.from}</td>
                    <td className="ticket-to">{result.to}</td>
                    <td>{moment(result.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                    <td>$ {result.price}</td>
                    <td>
                      {sessionStorage.getItem("userName") ? (
                        <Link to={`/tickets/flight/paypal/${result._id}`}>
                          <button
                            type="button"
                            className="btn btn-info btn-sm"
                            style={{ marginBottom: "20px" }}
                          >
                            Buy Ticket
                          </button>
                        </Link>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}
