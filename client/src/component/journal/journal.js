import React, { Component } from "react";
import axios from "axios";
import { Container, Carousel, Card, Nav } from "react-bootstrap";
import "./journal.css";
import JournalCard from "../shared/journalCard";
import { Link } from "react-router-dom";
import moment from "moment";

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
    await axios.get("/journals/getNative").then((response) => {
      this.setState({ journalList: response.data });
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
      <Container id="journal-page">
        <Carousel>
          {this.state.journalList.slice(0, 4).map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <Link to={`/journals/details/${item._id}`}>
                  <img
                    className="d-block w-100"
                    src={item.pic}
                    style={{ height: "400px" }}
                    alt="First slide"
                  />
                </Link>
                <Carousel.Caption>
                  <h2>
                    <strong>{moment(item.date).format("LL")}</strong>
                  </h2>
                  <p>{item.title}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
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
          {this.state.journalList.map((item) => {
            return <JournalCard item={item} key={item._id} />;
          })}
        </Card>
      </Container>
    );
  }
}
