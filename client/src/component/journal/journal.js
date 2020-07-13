import React, { Component } from "react";
import axios from "axios";
import { Container, Carousel, Card, Nav } from "react-bootstrap";
import "./journal.css";
import JournalCard from "../shared/journalCard";

export default class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalList: [],
    };
  }
  componentDidMount() {
    axios
      .get("/journals/getAll")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ journalList: data });
      });
  }

  findAllGuides = async () => {
    await axios
      .get("/journals/getAll")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ journalList: data });
      });
  };

  findNative = async () => {
    await axios
      .get("/journals/getNative")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ journalList: data });
      });
  };

  findNational = async () => {
    await axios
      .get("/journals/getNational")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({ journalList: data });
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
        <Card id="journal-list">
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
          {this.state.journalList.map((item, i) => {
            return <JournalCard item={item} key={i} />;
          })}
        </Card>
      </Container>
    );
  }
}
