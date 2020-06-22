import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./explore.css";
import CityBlock from "../home/cityBlock";
import BlogBlock from "../home/blogBlock";

export default class ExploreMainPage extends Component {
  render() {
    return (
      <>
        <div className="explore-main-page-search">
          <div className="explore-search-block"></div>
        </div>
        <Container className="explore-category-block">
          <h2 className="explore-category-title">Explore By </h2>
          <hr className="explore-hr"></hr>
          <Row>
            <Col className="col-6 col-md-4 explore-category-detail">
              <div className="detail-block-see">
                <div className="category-content">
                  <h3>See & Do</h3>
                  <p>44 places</p>
                </div>
              </div>
            </Col>
            <Col className="col-6 col-md-4 explore-category-detail">
              <div className="detail-block-food">
                <div className="category-content">
                  <h3>Food & Drink</h3>
                  <p>44 places</p>
                </div>
              </div>
            </Col>
            <Col className="col-6 col-md-4 explore-category-detail">
              <div className="detail-block-stay">
                <div className="category-content">
                  <h3>Stay</h3>
                  <p>44 places</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="explore-middle">
          <div className="explore-middle-block"></div>
        </div>
        <div className="explore-popular-city">
          <CityBlock />
        </div>
        <div className="explore-popular-blog">
          <BlogBlock />
        </div>
        <hr></hr>
      </>
    );
  }
}
