import React, { Component } from "react";
import "./shared.css";
import axios from "axios";
import moment from "moment";
import ReviewStar from "./reviewStar";

export default class ReviewDetails extends Component {
  state = {
    review: {},
    author: {},
    ratio: 0,
  };
  componentDidMount() {
    axios
      .get(`/explore/review/details/${this.props.review._id}`)
      .then((res) => {
        this.setState({
          review: res.data.review,
          author: res.data.author,
          ratio: (res.data.review.star / 5).toFixed(2) * 100,
        });
      });
  }
  render() {
    return (
      <div className="review-detail">
        <div className="review-author-block">
          <img
            className="review-author-headpic"
            alt="authorpic"
            src={this.state.author.pic}
          ></img>
          <div className="author-detail">
            <div className="review-star-block">
              <span className="author-name">{this.state.author.username}</span>
              <ReviewStar percentage={this.state.ratio} />
            </div>
            <div>{moment(this.state.review.date).format("YYYY-MM-DD")}</div>
          </div>
        </div>
        <div className="review-content" style={{ whiteSpace: "pre-wrap" }}>
          {this.state.review.content}
        </div>
      </div>
    );
  }
}
