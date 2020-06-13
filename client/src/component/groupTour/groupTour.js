import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export default class GroupTour extends Component {
  state = {
    groupTourList: [],
  };
  componentDidMount() {
    axios.get("/groupTours").then((res) => {
      console.log(res);
    });
  }
  render() {
    return <div>GroupTour</div>;
  }
}
