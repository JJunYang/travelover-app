import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

export default class TicketPage extends Component {
  render() {
    return (
      <div
        id="main"
        style={{ paddingTop: "3%", paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h1>Tickets and Hotel</h1>
        <hr></hr>
        <div id="flight">
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <h2>Flight</h2>
            </Col>
            <Col style={{ textAlign: "right", paddingRight: "5%" }}>
              <Link to={`/tickets/flight`}>
                <Button variant="primary">Book Tickets</Button>
              </Link>
            </Col>
          </Row>
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/domestic_1.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Domestic</Card.Title>
                  <Card.Text>Start from $100</Card.Text>
                  {/*<Link to={`/tickets/flight`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/europe_1.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Europe</Card.Title>
                  <Card.Text>Start from $1000</Card.Text>
                  {/*<Link to={`/tickets/flight`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/australia_1.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Australia</Card.Title>
                  <Card.Text>Start from $600</Card.Text>
                  {/*<Link to={`/tickets/flight`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/asia_1.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Asia</Card.Title>
                  <Card.Text>Start from $800</Card.Text>
                  {/*<Link to={`/tickets/flight`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="bus">
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <h2>Bus</h2>
            </Col>
            <Col style={{ textAlign: "right", paddingRight: "5%" }}>
              <Link to={`/tickets/bus`}>
                <Button variant="primary">Book Tickets</Button>
              </Link>
            </Col>
          </Row>
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/newyork.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Start from $10</Card.Text>
                  {/*<Link to={`/tickets/bus`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/miami.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Miami</Card.Title>
                  <Card.Text>Start from $30</Card.Text>
                  {/*<Link to={`/tickets/bus`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/california.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>California</Card.Title>
                  <Card.Text>Start from $40</Card.Text>
                  {/*<Link to={`/tickets/bus`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/boston.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Boston</Card.Title>
                  <Card.Text>Start from $20</Card.Text>
                  {/*<Link to={`/tickets/bus`}><Button variant="primary">Book Tickets</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="hotel">
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <h2>Hotel</h2>
            </Col>
            <Col style={{ textAlign: "right", paddingRight: "5%" }}>
              <Link to={`/tickets/hotel`}>
                <Button variant="primary">Make Reservation</Button>
              </Link>
            </Col>
          </Row>
          <Row style={{ paddingTop: "3%" }}>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/domestic_2.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Domestic</Card.Title>
                  <Card.Text>Start from $80/day</Card.Text>
                  {/*<Link to={`/tickets/hotel`}><Button variant="primary">Make Reservation</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/europe_2.png"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Europe</Card.Title>
                  <Card.Text>Start from $90/day</Card.Text>
                  {/*<Link to={`/tickets/hotel`}><Button variant="primary">Make Reservation</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/australia_2.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Australia</Card.Title>
                  <Card.Text>Start from $60/day</Card.Text>
                  {/*<Link to={`/tickets/hotel`}><Button variant="primary">Make Reservation</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/image/asia_2.jpg"}
                  style={{ width: "100%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Asia</Card.Title>
                  <Card.Text>Start from $40/day</Card.Text>
                  {/*<Link to={`/tickets/hotel`}><Button variant="primary" >Make Reservation</Button></Link>*/}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
