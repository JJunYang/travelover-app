import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./explore.css";
import CityBlock from "../home/cityBlock";

export default class ExploreMainPage extends Component {
  render() {
    return (
      <>
        <div className="explore-top-block"></div>
        <div className="explore-top-cover">
          <div className="explore-top-cover-block"></div>
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
          <div className="explore-botton-cover-block">
            <h2 className="home-subtitle">Travel Inspiration</h2>
            <hr className="explore-hr"></hr>
          </div>
          <Container>
            <Row>
              <Col className="blog-col col-md-4 col-6">
                <Card style={{ border: "none" }}>
                  <Card.Img
                    className="home-card-img"
                    src={`https://wp.getgolo.com/wp-content/uploads/2019/11/photo-1467444606224-8254b013a046.jpeg`}
                  ></Card.Img>
                  <Card.Body className="home-blog-cardbody">
                    <ul className="taglist">
                      <li>
                        <a className="card-blog-tag" href="/">
                          ROAD TRIPS
                        </a>
                      </li>
                      <li>
                        <a className="card-blog-tag" href="/">
                          TIPS & TRICKS
                        </a>
                      </li>
                    </ul>
                    <Card.Text className="card-blog-title">
                      Why You Should Visit Turkeys
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="blog-col col-md-4 col-6">
                <Card style={{ border: "none" }}>
                  <Card.Img
                    className="home-card-img"
                    src={`https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  ></Card.Img>
                  <Card.Body className="home-blog-cardbody">
                    <ul className="taglist">
                      <li>
                        <a className="card-blog-tag" href="/">
                          TIPS & TRICKS
                        </a>
                      </li>
                    </ul>
                    <Card.Text className="card-blog-title">
                      Start Your Trip in Nature
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="blog-col col-md-4 col-6">
                <Card style={{ border: "none" }}>
                  <Card.Img
                    className="home-card-img"
                    src={`https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`}
                  ></Card.Img>
                  <Card.Body className="home-blog-cardbody">
                    <ul className="taglist">
                      <li>
                        <a className="card-blog-tag" href="/">
                          ROAD TRIPS
                        </a>
                      </li>
                    </ul>
                    <Card.Text className="card-blog-title">
                      Seeking your Own Romance in France
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <hr></hr>
      </>
    );
  }
}
