import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
export default class BlogBlock extends Component {
  render() {
    return (
      <Container id="home-blogBlock">
        <h2 className="home-subtitle">Travel Inspiration</h2>
        <Row>
          <Col className="col-md-4">
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
          <Col className="col-md-4">
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
          <Col className="col-md-4">
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
    );
  }
}
