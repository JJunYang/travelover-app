import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

export default class CarouselBlock extends Component {
  state = {
    journalList: [],
  };
  async componentDidMount() {
    await axios.get("/journals/getThreeJournals").then((res) => {
      this.setState({ journalList: res.data });
    });
  }
  render() {
    return (
      <Carousel style={{ marginTop: "55px" }}>
        {this.state.journalList.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Link to={`/journals/details/${item._id}`}>
                <img
                  className="d-block w-100"
                  src={item.pic}
                  alt="title pic"
                  style={{ height: "400px" }}
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
    );
  }
}
