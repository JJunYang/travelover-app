import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./explore.css";
import CityBlock from "../home/cityBlock";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExploreMainPage extends Component {
  state = {
    placeNum: [],
  };
  componentDidMount() {
    axios
      .get("/explore/place/getPlaceNumByCategory")
      .then((res) => {
        this.setState({ placeNum: res.data });
      })
      .then(() => {
        console.log(this.state.placeNum);
      });
  }
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
            {this.state.placeNum.map((item, i) => {
              return (
                <Col className="col-6 col-md-4 explore-category-detail" key={i}>
                  <Link
                    to={`/explore/place/placeList/${item.category}`}
                    className={`detail-block-${item.abbr}`}
                  >
                    <div className="category-content">
                      <h3>{item.category}</h3>
                      <p>{item.num} places</p>
                    </div>
                  </Link>
                </Col>
              );
            })}
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
