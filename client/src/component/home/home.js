import React, { Component } from "react";
import CarouselBlock from "./carouselBlock";
import CityBlock from "./cityBlock";
import BlogBlock from "./blogBlock";

// import axios from "axios";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBlock />
        <CityBlock />
        <div id="home-middle" className="container-fluid">
          <div id="home-middle-left">
            <span id="home-middle-word">Explore The Beautiful World</span>
          </div>
        </div>
        <BlogBlock />
        {/* <div className="test"></div> */}
      </>
    );
  }
}
