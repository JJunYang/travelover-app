import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Carousel, Card, Nav, Row, Col } from "react-bootstrap";
import { Image,Button,Badge } from "react-bootstrap";

export default class TravelGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelGuideList: [],
    };
  }
  componentDidMount() {
    axios
      .get("/travelGuides/getAll")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ travelGuideList: data });
      });
  }

  findAllGuides = async () => {
    await axios
      .get("/travelGuides/getAll")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ travelGuideList: data });
      });
  };

  findNative = async () => {
    await axios
      .get("/travelGuides/getNative")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ travelGuideList: data });
      });
  };

  findNational = async () => {
    await axios
      .get("/travelGuides/getNational")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ travelGuideList: data });
      });
  };

  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://n1-q.mafengwo.net/s16/M00/DA/8C/CoUBUl6Nrw2Abm_KABePgtCWC8Y490.png?imageMogr2%2Finterlace%2F1`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>10</strong>/Apr.2020
              </h2>
              <p>Starting love on the hot air balloon in Turkey.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://p1-q.mafengwo.net/s16/M00/5D/BA/CoUBUl6MPGOAL51jACMCRcXZ18A154.png?imageMogr2%2Finterlace%2F1`}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>13</strong>/Apr.2020
              </h2>
              <p>Sublimate friendship in the desert.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://b1-q.mafengwo.net/s16/M00/4C/F3/CoUBUl6ZwtCAeSbtAByAg-xTCag859.png?imageMogr2%2Finterlace%2F1`}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>
                <strong>16</strong>/Apr.2020
              </h2>
              <p>Beautiful North Africa, Meet Utopia after youth</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link onClick={this.findAllGuides}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.findNative}>Native</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.findNational}>National</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {this.state.travelGuideList.map((item, i) => {
            return (
              <Card.Body key={i}>
                <hr></hr>
                <p style={{ fontSize: "13px" }}>
                  <img
                    src={require("../../Icon/journal.png")}
                    alt=""
                    style={{
                      width: "12px",
                      height: "12px",
                      marginRight: "10px",
                    }}
                  ></img>
                  From{" "}
                  <span style={{ color: "orange", fontStyle: "italic" }}>
                    {item.type}
                  </span>
                </p>
                <Card.Title>{item.title}</Card.Title>
                <Row>
                  <Col md={3}>
                    <Image
                      className="card-img-top"
                      src={item.pic[0]}
                      alt=""
                      style={{ width: "90%", height: "70%" }}
                    />
                    <br></br>
                  </Col>
                  <Col md={9}>
                    <Card.Text>{item.description}</Card.Text>
                    <Row style={{ marginTop: "60px" }}>
                      <Col xs={3}>
                        <Link to={`/travelGuides/details/${item._id}`}>
                          <Button size="sm" variant="primary">
                            View Details
                          </Button>
                        </Link>
                      </Col>
                      <Col xs={{ offset: 5 }}>
                        <Image
                          src={item.pic[1]}
                          alt=""
                          style={{
                            width: "11px",
                            height: "11px",
                            marginRight: "10px",
                          }}
                          roundedCircle
                        />
                        <span style={{ fontSize: "10px", fontStyle: "italic" }}>
                          author:
                        </span>
                        <Badge style={{ color: "orange", fontStyle: "italic" }}>
                          {item.author.username}
                        </Badge>
                        <img
                          src={require("../../Icon/view.png")}
                          alt=""
                          style={{ width: "11px", height: "11px" }}
                        ></img>
                        <span
                          style={{
                            fontSize: "10px",
                            fontStyle: "italic",
                            color: "grey",
                            marginLeft: "3px",
                          }}
                        >
                          views: {item.clickNum}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            );
          })}
        </Card>
      </Container>
    );
  }
}
