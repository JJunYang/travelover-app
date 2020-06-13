import React, { Component } from "react";
import { Alert, Jumbotron, Badge } from "react-bootstrap";
import moment from "moment";
import axios from "axios";

export default class Society extends Component {
  state = {
    topicList: [],
  };

  componentDidMount() {
    axios.get("/society/").then((res) => {
      this.setState({ topicList: res.data });
    });
  }
  render() {
    return (
      <div
        id="society"
        className="container"
        style={{ paddingTop: "20px", paddingBottom: "50px" }}
      >
        <h1>Social Communication</h1>
        <Alert variant="success">
          <Alert.Heading>Start Your Discusstion!</Alert.Heading>
          <p>
            In here, you can ask whatever you want to know. And you could also
            look through the information that you needed.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to start discussion, please obey the rules. Enjoy
            yourselves!
          </p>
        </Alert>
        <button
          className="badge badge-danger"
          style={{ fontSize: "25px", marginLeft: "10px" }}
          onClick={this.selectAll}
        >
          All Topics
        </button>
        <a
          href="/society/postTopic"
          className="badge badge-dark"
          style={{ fontSize: "25px", marginLeft: "50px" }}
        >
          Post Topic
        </a>
        <hr />

        {this.state.topicList.map((item, i) => {
          return (
            <Jumbotron key={i}>
              <h1 className="display-5" style={{ color: "orange" }}>
                {item.title}
              </h1>
              <img
                src=""
                alt="titlePic"
                width="250px"
                height="125px"
                style={{ float: "left", marginRight: " 20px" }}
              />
              <div style={{ width: "80%", wordBreak: "break-word" }}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</p>
              </div>
              <div style={{ clear: "both" }}>
                <hr className="my-4" />
                <span>Tags: &nbsp;</span>
                <Badge variant="danger" style={{ fontSize: "15px" }}>
                  {item.tag}
                </Badge>{" "}
                {/* <a href="/" className="badge badge-danger" style={{ fontSize: "15px" }}>{item.tag}</a> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginLeft: "100px" }}
                >
                  Answer Quantity:{" "}
                  <span className="badge badge-light">
                    {item.comments.length}
                  </span>
                </button>
                <br />
                <br />
                <div style={{ fontSize: "18px" }}>
                  <a href={"/society/topicDetail/" + item._id}>look through</a>{" "}
                  |{" "}
                  <span style={{ color: "gray" }}>
                    <i>{moment(item.date).format("YYYY-MM-DD HH:mm:ss")}</i>
                  </span>
                  |{" "}
                  <span style={{ color: "orange", fontFamily: "Arial Black" }}>
                    <i>{item.author.username}</i>
                  </span>
                </div>
              </div>
            </Jumbotron>
          );
        })}
        {this.state.desc}
      </div>
    );
  }
}
