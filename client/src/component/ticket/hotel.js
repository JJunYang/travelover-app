import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class Hotel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelList: [],
    };
  }

  componentDidMount() {
    this.getHotel();
  }

  getHotel = async (props) => {
    await axios
      .get("/tickets/hotel")
      .then((response) => {
        return response.data;
      })
      .then((json) => {
        this.setState({ hotelList: json });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.hotelList);
  };

  render() {
    return (
      <div
        id="hotel_ticket"
        style={{ paddingTop: "3%", paddingLeft: "10%", paddingRight: "10%" }}
      >
        <h1>Make Hotel Reservation</h1>
        <hr></hr>
        <div
          className="hotelCarousel"
          style={{ paddingLeft: "15%", paddingRight: "15%" }}
        >
          {this.state.hotelList.map((result, key) => {
            return (
              <div key={key} style={{ paddingTop: "10%" }}>
                <Row>
                  <Carousel key={key}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={result.image[0]}
                        alt="First slide"
                        style={{ height: "500px" }}
                      />
                      <Carousel.Caption>
                        <h2>{result.hotelName}</h2>
                        <p>{result.location}</p>
                        <h3>${result.price}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={result.image[1]}
                        alt="First slide"
                        style={{ height: "500px" }}
                      />
                      <Carousel.Caption>
                        <h2>{result.hotelName}</h2>
                        <p>{result.location}</p>
                        <h3>${result.price}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={result.image[2]}
                        alt="First slide"
                        style={{ height: "500px" }}
                      />
                      <Carousel.Caption>
                        <h2>{result.hotelName}</h2>
                        <p>{result.location}</p>
                        <h3>${result.price}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Row>
                <Row style={{ paddingTop: "3%" }}>
                  <Col style={{ textAlign: "center" }}>
                    {localStorage.getItem("userName") === "" ||
                    localStorage.getItem("userName") === null ? (
                      ""
                    ) : (
                      <Link to={`/tickets/hotel/paypal/${result._id}`}>
                        <button
                          type="button"
                          className="btn btn-info btn-sm"
                          style={{ marginBottom: "20px" }}
                        >
                          Make Reservation
                        </button>
                      </Link>
                    )}
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
