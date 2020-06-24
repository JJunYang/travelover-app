import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./details.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

export default class StayDetails extends Component {
  render() {
    return (
      <>
        <Carousel slidesPerPage={2} arrows infinite centered>
          <img
            className="carousel-img"
            src={`https://wp.getgolo.com/wp-content/uploads/2019/11/Ikoyi-london-2019-SamGillespie.jpg`}
            alt="pic"
          />
          <img
            className="carousel-img"
            src={`https://wp.getgolo.com/wp-content/uploads/2019/11/Cinc_Sentits_2019_1W7A5805.jpg`}
            alt="pic"
          />
          <img
            className="carousel-img"
            src={`https://wp.getgolo.com/wp-content/uploads/2019/10/photo-1558210598-89ba75b1724e.jpeg`}
            alt="pic"
          />
          <img
            className="carousel-img"
            src={`https://wp.getgolo.com/wp-content/uploads/2019/10/photo-1541686242972-cde41c4fd17d.jpeg`}
            alt="pic"
          />
        </Carousel>
        <Container id="stay-main">
          <div className="explore-leftside">
            <div className="item-category">
              <a href="/" className="item-link">
                TOKYO
              </a>
              <a href="/" className="item-link">
                Food & Drink
              </a>
            </div>
            <h2>Yamachan</h2>
            <div>
              <span className="item-star">5.0</span> (2 reviews){" "}
              <span className="item-cost">Free</span>
              <span className="item-place-type">Restaurants</span>
            </div>
            <hr></hr>
            <div className="item-description-hide" id="item-description-hide">
              <div className="inner-content">
                <div className="visibility">
                  <p>
                    Yamachan is an all-you-can-drink premium sake bar located
                    near Shinjuku. For an affordable price you can drink as much
                    sake as you like. You can even take along food and other
                    alcohol with you, or you can leave in the middle of your
                    drinking session and return to order more items. The setting
                    is like that of a classroom, with cheap wooden desks and
                    chairs, and there are no decorative elements. The only
                    objective here is to drink the best sake in the country. The
                    bar is self-service so come prepared to pour your own drink.
                  </p>
                </div>
              </div>
              <div className="toggle-desc">
                <a className="show-more" href="#item-description-show">
                  Show more
                </a>
                {/* <a class="hide-all" href="#">
                  Hide all
                </a> */}
              </div>
            </div>
            <div className="item-description-show" id="item-description-show">
              <div className="inner-content">
                <div className="inner-hide">
                  <p>
                    Yamachan is an all-you-can-drink premium sake bar located
                    near Shinjuku. For an affordable price you can drink as much
                    sake as you like. You can even take along food and other
                    alcohol with you, or you can leave in the middle of your
                    drinking session and return to order more items. The setting
                    is like that of a classroom, with cheap wooden desks and
                    chairs, and there are no decorative elements. The only
                    objective here is to drink the best sake in the country. The
                    bar is self-service so come prepared to pour your own drink.
                  </p>
                </div>
              </div>
              <div className="toggle-desc">
                <a className="hide-all" href="/">
                  Hide all
                </a>
              </div>
            </div>
            <hr></hr>
            <div>
              <h3>Contact</h3>
              <p>
                11 17, 5-chōme, Shinjuku Shinjuku-ku, Tōkyō-to, 160-0022, Japan
              </p>
              <p>+81352723555</p>
              <p>www.yamachan.co.jp</p>
              <p>facebook.com/getgolo</p>
              <p>instagram./getgolo</p>
            </div>
            <hr></hr>
            <div>
              <h3>Opening Hours</h3>
              <p>
                <span className="openhour-day">Monday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
              <p>
                <span className="openhour-day">Tuesday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
              <p>
                <span className="openhour-day">Wednesday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
              <p>
                <span className="openhour-day">Thursday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
              <p>
                <span className="openhour-day">Friday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
              <p>
                <span className="openhour-day">Saturday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
              <p>
                <span className="openhour-day">Sunday:</span>
                <span>10:00 AM - 11:00 PM</span>
              </p>
            </div>
            <hr></hr>
            <div>
              <div className="review-title">
                <h3>Review</h3>
                <span className="review-star">5.0 </span>
                <span className="review-title-num">Base on 2 Reviews</span>
              </div>
              <div className="review-detail">
                <div className="review-author-block">
                  <img
                    className="review-author-headpic"
                    alt="authorpic"
                    src={`https://wp.getgolo.com/wp-content/uploads/2020/01/Rectangle-23.png`}
                  ></img>
                  <div className="author-detail">
                    <div>Ann</div>
                    <div>5 months ago</div>
                  </div>
                </div>
                <div className="review-content">
                  Excellent service and awesome food. Truly a 5 star restaurant.
                  Service is seamless and spot on. Food was prepared perfectly.
                </div>
              </div>
              <hr></hr>
            </div>
          </div>
          <div className="explore-rightside">
            <div className="book-block">
              <h4>Booking Online</h4>
              <Button className="book-block-btn">Booking now</Button>
              <p className="book-block-note">By Booking.com</p>
            </div>
          </div>
        </Container>
        <div className="similar-places">
          <Container>
            <h2 className="sub-block-name">Similar Places</h2>
            <Row>
              <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
                <Card className="item-card">
                  <div className="item-card-thumbnail">
                    <Card.Img
                      variant="top"
                      className="item-hotel-img"
                      src={`https://cf.bstatic.com/images/hotel/max1280x900/107/107458730.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text className="item-place-term">
                      <span className="place-type">Hotel</span>
                      <span className="place-city">Boston</span>
                    </Card.Text>

                    <Card.Title>Boston Marriott Copley Place</Card.Title>
                    <Card.Text>8.7 (4 Reviews)</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
                <Card className="item-card">
                  <div className="item-card-thumbnail">
                    <Card.Img
                      variant="top"
                      className="item-hotel-img"
                      src={`https://cf.bstatic.com/images/hotel/max1280x900/173/173745332.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text className="item-place-term">
                      <span className="place-type">Hotel</span>
                      <span className="place-city">Boston</span>
                    </Card.Text>
                    <Card.Title>YOTEL Boston</Card.Title>
                    <Card.Text>4.0 (3 Reviews)</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
                <Card className="item-card">
                  <div className="item-card-thumbnail">
                    <Card.Img
                      variant="top"
                      className="item-hotel-img"
                      src={`https://cf.bstatic.com/images/hotel/max1280x900/155/155685471.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text className="item-place-term">
                      <span className="place-type">Apartments</span>
                      <span className="place-city">Boston</span>
                    </Card.Text>
                    <Card.Title>
                      Global Luxury Suites Downtown Boston
                    </Card.Title>
                    <Card.Text>4.0 (3 Reviews)</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="sub-block-col col-6 clo-md-4 col-lg-3">
                <Card className="item-card">
                  <div className="item-card-thumbnail">
                    <Card.Img
                      variant="top"
                      className="item-hotel-img"
                      src={`https://cf.bstatic.com/images/hotel/max1024x768/395/39532183.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text className="item-place-term">
                      <span className="place-type">Hotel</span>
                      <span className="place-city">Los Angeles</span>
                    </Card.Text>
                    <Card.Title>Titta Inn</Card.Title>
                    <Card.Text>4.0 (3 Reviews)</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
