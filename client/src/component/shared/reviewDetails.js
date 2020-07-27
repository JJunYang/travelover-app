import React, { Component } from "react";
import "./shared.css";
import axios from "axios";
import moment from "moment";

export default class ReviewDetails extends Component {
  state = {
    review: {},
    author: {},
  };
  componentDidMount() {
    axios
      .get(`/explore/review/details/${this.props.review._id}`)
      .then((res) => {
        this.setState({ review: res.data.review, author: res.data.author });
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
            <div>{this.state.author.username}</div>
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
