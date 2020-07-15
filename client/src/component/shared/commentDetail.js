import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

export default class CommentDetail extends Component {
  state = {
    comment: {},
    author: {},
  };
  componentDidMount() {
    axios
      .get(`/topic/getCommentDetails/${this.props.comment._id}`)
      .then((res) => {
        this.setState({ comment: res.data.comment, author: res.data.author });
      })
      .then(() => {
        console.log(this.state);
      });
  }
  render() {
    return (
      <div className="comment-detail">
        <div className="comment-author-block">
          <img
            className="comment-author-headpic"
            alt="authorpic"
            src={this.state.author.pic}
          ></img>
          <div className="author-detail">
            <div>{this.state.author.username}</div>
            <div>{moment(this.state.comment.date).format("YYYY-MM-DD")}</div>
          </div>
        </div>
        <div className="comment-content" style={{ whiteSpace: "pre-wrap" }}>
          {this.state.comment.content}
        </div>
      </div>
    );
  }
}
