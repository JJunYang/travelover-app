import React, { Component } from "react";
import CarouselBlock from "./carouselBlock";
import CityBlock from "./cityBlock";
import TopicBlock from "./topicBlock";
import "./homePage.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBlock />
        <CityBlock />
        <div id="home-middle" className="container-fluid"></div>
        <TopicBlock />
      </>
    );
  }
}
