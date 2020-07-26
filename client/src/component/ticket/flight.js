import React, { Component } from "react";
import { Table, Form, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import "./ticket.css";

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
    this.getFlight();
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
        <div className="subpage-topblock">
          <div className="subpage-topblock-container">
            <div className="subpage-topblock-left"></div>
            <div className="subpage-topblock-right">
              <img
                className="subpage-topblock-pic"
                alt="top pic"
                src={`https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
              ></img>
            </div>
          </div>
        </div>
        <Container id="flight_ticket">
          <h2>Book Flight Ticket</h2>
          <hr></hr>
          <Form className="ticket-form">
            <Row className="ticket-form-row justify-content-center align-items-end">
              <Col className="col-10 col-md-3">
                <Form.Group controlId="From">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="city name"
                    name="from"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col className="col-10 col-md-3">
                <Form.Group controlId="To">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="city name"
                    name="to"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col className="col-3 col-md-2">
                <Form.Group>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={(e) => this.handleClickBtn(e)}
                  >
                    Search
                  </Button>
                </Form.Group>
              </Col>
            </Row>
            {sessionStorage.getItem("userName") ? (
              ""
            ) : (
              <div className="text-center login-note">! Login to buy !</div>
            )}
          </Form>
          <div id="flightTable">
            <Table responsive className="ticket-table">
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
                      <td>
                        {moment(result.date).format("YYYY-MM-DD HH:mm:ss")}
                      </td>
                      <td>$ {result.price}</td>
                      <td>
                        {sessionStorage.getItem("userName") ? (
                          <Link to={`/tickets/flight/paypal/${result._id}`}>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
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
      </>
    );
  }
}
