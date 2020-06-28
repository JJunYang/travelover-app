import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./details.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import ReviewDetails from "../shared/reviewDetails";
import { Link } from "react-router-dom";

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
  };
  componentDidMount() {
    axios
      .get(`/explore/place/${this.props.match.params._id}`)
      .then((res) => {
        this.setState({ place: res.data });
      })
      .then(() => {
        console.log(this.state);
      });
  }
  render() {
    return (
      <>
        <Carousel slidesPerPage={2} arrows infinite centered>
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
          <div>
            <span className="item-star">{this.state.place.reviewStar}</span> (
            {this.state.place.reviewNum} reviews)
            <span className="item-cost">{this.state.place.cost}</span>
            <span className="item-place-type">{this.state.place.type}</span>
          </div>
          <hr></hr>
          <div className="item-description-hide" id="item-description-hide">
            <div className="inner-content">
              <div className="visibility">
                <p>{this.state.place.introducing}</p>
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
                <p>{this.state.place.introducing}</p>
              </div>
            </div>
            <div className="toggle-desc">
              {/* <a className="show-more" href="#food-description-show">
                  Show more
                </a> */}
              <a className="hide-all" href="/">
                Hide all
              </a>
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
          <div>
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
            <hr></hr>
          </div>
        </Container>
      </>
    );
  }
}
