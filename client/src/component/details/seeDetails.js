import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./details.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import ReviewDetails from "../shared/reviewDetails";
import { Link } from "react-router-dom";
import PlaceCard from "../shared/placeCard";

export default class SeeDetails extends Component {
  state = {
    place: {
      contact: {},
      openingHour: {
        Monday: {},
        Tuesday: {},
        Wednesday: {},
        Thursday: {},
        Friday: {},
        Saturday: {},
        Sunday: {},
      },
      city: {},
      pics: [],
      reviewList: [],
    },
    pList: [],
    similarPlaces: [],
    rating: "",
    content: "",
    message: "",
    ratio: 0,
  };
  componentDidMount() {
    axios
      .get(`/explore/place/getPlaceById/${this.props.match.params._id}`)
      .then((res) => {
        this.setState({
          place: res.data.place,
          pList: res.data.pList,
          ratio: (res.data.place.reviewStar / 5).toFixed(2) * 100,
        });
      })
      .then(() => {
        console.log(this.state);
      });
    axios
      .get("/explore/place/getSimilarPlaces", {
        params: { _id: this.props.match.params._id },
      })
      .then((res) => {
        this.setState({
          similarPlaces: res.data,
        });
      });
  }

  showMore = () => {
    document.getElementById("item-hide").classList.add("unplay");
    document.getElementById("item-hide").classList.remove("play");
    document.getElementById("item-show").classList.remove("unplay");
    document.getElementById("item-show").classList.add("play");
  };
  hideAll = () => {
    document.getElementById("item-hide").classList.add("play");
    document.getElementById("item-hide").classList.remove("unplay");
    document.getElementById("item-show").classList.remove("play");
    document.getElementById("item-show").classList.add("unplay");
  };
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  handleSubmitRateForm = (e) => {
    e.preventDefault();
    if (this.state.rating === null || this.state.rating === "") {
      this.setState({ message: "Please rate first!" });
      return;
    }
    axios
      .post("/add/newReview", {
        content: this.state.content,
        star: this.state.rating,
        place: this.state.place,
      })
      .then(() => {
        const pathname = this.props.location.pathname;
        this.props.history.replace("/reload");
        setTimeout(() => {
          this.props.history.replace(pathname);
        });
      });
  };
  render() {
    const width = {
      width: `${this.state.ratio}%`,
    };
    return (
      <>
        <Carousel
          slidesPerPage={2}
          arrows
          infinite
          centered
          className="place-details-carousel"
        >
          {this.state.place.pics.map((item, i) => {
            return (
              <img key={i} className="carousel-img" src={item} alt="pic" />
            );
          })}
        </Carousel>
        <Container id="see-do-main">
          <div className="category">
            <Link
              to={`/explore/city/${this.state.place.city.name}&${this.state.place.city._id}`}
              className="item-link"
            >
              {this.state.place.city.name}
            </Link>
            <a href="/" className="item-link">
              {this.state.place.category}
            </a>
          </div>
          <h2>{this.state.place.name}</h2>
          <div style={{ display: "flex" }}>
            <span className="item-star">{this.state.place.reviewStar}</span>
            <span className="star-rating">
              <div className="star-rating-top" style={width}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="star-rating-bottom">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </span>
            <span>({this.state.place.reviewNum} reviews)</span>
            <span className="item-cost">{this.state.place.cost}</span>
            <span className="item-place-type">{this.state.place.type}</span>
          </div>
          <hr></hr>
          <div className="item-hide" id="item-hide">
            <div className="inner-content">
              {this.state.pList.map((p, i) => {
                return <p key={i}>{p}</p>;
              })}
            </div>
            <div className="show-more" onClick={this.showMore}>
              Show More
            </div>
          </div>
          <div className="item-show" id="item-show">
            <div className="inner-content">
              {this.state.pList.map((p, i) => {
                return <p key={i}>{p}</p>;
              })}
            </div>
            <div className="hide-all" onClick={this.hideAll}>
              Hide All
            </div>
          </div>
          <hr></hr>
          <div>
            <h3>Contact</h3>
            <p>{this.state.place.contact.address}</p>
            <p>{this.state.place.contact.phone}</p>
            <p>{this.state.place.contact.website}</p>
          </div>
          <hr></hr>
          <div>
            <h3>Opening Hours</h3>
            <p>
              <span className="openhour-day">Monday:</span>
              <span>
                {this.state.place.openingHour.Monday.from} -{" "}
                {this.state.place.openingHour.Monday.to}
              </span>
            </p>
            <p>
              <span className="openhour-day">Tuesday:</span>
              <span>
                {this.state.place.openingHour.Tuesday.from} -{" "}
                {this.state.place.openingHour.Tuesday.to}
              </span>
            </p>
            <p>
              <span className="openhour-day">Wednesday:</span>
              <span>
                {this.state.place.openingHour.Wednesday.from} -{" "}
                {this.state.place.openingHour.Wednesday.to}
              </span>
            </p>
            <p>
              <span className="openhour-day">Thursday:</span>
              <span>
                {this.state.place.openingHour.Thursday.from} -{" "}
                {this.state.place.openingHour.Thursday.to}
              </span>
            </p>
            <p>
              <span className="openhour-day">Friday:</span>
              <span>
                {this.state.place.openingHour.Friday.from} -{" "}
                {this.state.place.openingHour.Friday.to}
              </span>
            </p>
            <p>
              <span className="openhour-day">Saturday:</span>
              <span>
                {this.state.place.openingHour.Saturday.from} -{" "}
                {this.state.place.openingHour.Saturday.to}
              </span>
            </p>
            <p>
              <span className="openhour-day">Sunday:</span>
              <span>
                {this.state.place.openingHour.Sunday.from} -{" "}
                {this.state.place.openingHour.Sunday.to}
              </span>
            </p>
          </div>
          <hr></hr>
          {sessionStorage.getItem("userName") ? (
            <div className="review-create-block">
              <Form onSubmit={this.handleSubmitRateForm}>
                <div className="review-notes">Create your review:</div>
                <div className="review-rate">
                  <div className="review-rate-title">Rating:</div>
                  <div className="rating" onChange={this.handleChange}>
                    <input
                      type="radio"
                      id="star5"
                      name="rating"
                      value="5"
                      hidden
                    />
                    <label htmlFor="star5"></label>
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      value="4"
                      hidden
                    />
                    <label htmlFor="star4"></label>
                    <input
                      type="radio"
                      id="star3"
                      name="rating"
                      value="3"
                      hidden
                    />
                    <label htmlFor="star3"></label>
                    <input
                      type="radio"
                      id="star2"
                      name="rating"
                      value="2"
                      hidden
                    />
                    <label htmlFor="star2"></label>
                    <input
                      type="radio"
                      id="star1"
                      name="rating"
                      value="1"
                      hidden
                    />
                    <label htmlFor="star1"></label>
                  </div>
                  <div className="review-rate-message">
                    {this.state.message}
                  </div>
                </div>
                <textarea
                  id="review-content"
                  name="content"
                  cols="45"
                  rows="7"
                  required
                  onChange={this.handleChange}
                  placeholder="Enter your review Content now!"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </Form>
            </div>
          ) : (
            <p>
              <Link to="/login" className="link-login">
                Login
              </Link>{" "}
              to review
            </p>
          )}
          <hr></hr>
          <div className="review-block">
            <div className="review-title">
              <h3>Review</h3>
              <span className="review-star">
                {this.state.place.reviewStar}{" "}
              </span>
              <span className="review-title-num">
                Base on {this.state.place.reviewNum} Reviews
              </span>
            </div>
            {this.state.place.reviewList.map((item, i) => {
              return <ReviewDetails review={item} key={i} />;
            })}
          </div>
        </Container>
        <div className="similar-places">
          <Container>
            <h2 className="sub-block-name">Similar Places</h2>
            <Row>
              {this.state.similarPlaces.map((place, i) => {
                return (
                  <Col
                    className="sub-block-col col-6 clo-md-4 col-lg-3"
                    key={i}
                  >
                    <PlaceCard place={place}></PlaceCard>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
