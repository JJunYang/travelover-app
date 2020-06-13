import React, { Component } from "react";
import { Alert, Badge, Form, Button } from "react-bootstrap";
import moment from "moment";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import axios from "axios";

export default class TopicDetail extends Component {
  state = {
    title: "",
    description: "",
    tag: "",
    author: {
      id: "",
      username: "",
    },
    date: "",
    comments: [],
    display: "block",
    answer: "",
  };
  componentDidMount() {
    axios
      .get(`/society/topicDetail/${this.props.match.params._id}`)
      .then((res) => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          tag: res.data.tag,
          author: {
            id: res.data.author.id,
            username: res.data.author.username,
          },
          date: res.data.date,
          comments: res.data.comments,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  postAnswer = () => {
    if (this.state.answer.trim().length < 1) {
      alert("Your answer cannot be empty.");
    } else if (
      localStorage.getItem("userName") === null ||
      localStorage.getItem("userName") === ""
    ) {
      alert("Your need to log in to post your answer!");
      this.props.history.push("/login");
    } else {
      let answerValue = {
        userId: localStorage.getItem("userID"),
        userName: localStorage.getItem("userName"),
        comment: this.state.answer,
      };
      axios({
        url: `/society/topicDetail/${this.props.match.params._id}`,
        method: "PUT",
        data: answerValue,
      })
        .then((res) => {
          this.props.history.push("/society");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  toggleAnswer = () => {
    if (this.state.display === "block") {
      this.setState({ display: "none" });
    } else this.setState({ display: "block" });
  };

  render() {
    return (
      <div
        id="society"
        className="container"
        style={{ paddingTop: "20px", paddingBottom: "50px" }}
      >
        <h1 style={{ textAlign: "center" }}>Social Communication</h1>
        <Alert variant="success">
          <Alert.Heading>Start Your Communication</Alert.Heading>
          <p>
            In here, you can ask whatever you want to know. And you could also
            look through the information that you needed.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need start discussion, please obey the rules. Enjoy
            yourselves!
          </p>
        </Alert>

        <Alert variant="primary">
          <Alert.Heading>
            <img
              src={require("../../Icon/topic.png")}
              alt="topic"
              style={{ height: "40px", width: "40px" }}
            />
            Topic: {this.state.title}
          </Alert.Heading>
          <p>
            <img
              src={require("../../Icon/desc.png")}
              alt="description"
              style={{ height: "40px", width: "40px" }}
            />
            Description:&nbsp;&nbsp;{this.state.description}
          </p>

          <p>
            <img
              src={require("../../Icon/user.png")}
              alt="user"
              style={{ height: "40px", width: "40px" }}
            />
            User: {this.state.author.username}
          </p>
          <p>
            <img
              src={require("../../Icon/clock.png")}
              alt="clock"
              style={{ height: "40px", width: "40px" }}
            />
            Time: {moment(this.state.date).format("YYYY-MM-DD HH:mm:ss")}
          </p>
          <p>
            <img
              src={require("../../Icon/tag.png")}
              alt="tag"
              style={{ height: "40px", width: "40px" }}
            />
            Tags: &nbsp;
            <Badge
              variant="danger"
              style={{ fontSize: "15px", marginRight: "100px" }}
            >
              {this.state.tag}
            </Badge>{" "}
            {/* <a href="/" className="badge badge-danger" style={{fontSize: "15px", marginRight:"100px"}}>{this.state.topic.tag}</a> */}
          </p>
          <hr />
          <p className="mb-0" style={{ fontFamily: "impact" }}>
            Answer Quantity: {this.state.comments.length}
          </p>
        </Alert>
        <h1>Answer List</h1>
        <Toggle defaultChecked={true} onChange={this.toggleAnswer} />
        <span style={{ fontSize: "30px", color: "grey" }}>
          &nbsp;Display the answer list?
        </span>
        <hr />
        <div id="answerList" style={{ display: this.state.display }}>
          {this.state.comments.map((item, i) => {
            return (
              <Alert variant="warning" key={i}>
                <Alert.Heading>
                  <img
                    src={require("../../Icon/user.png")}
                    alt="user"
                    style={{ height: "40px", width: "40px" }}
                  />
                  User: {item.userName}
                </Alert.Heading>
                <div style={{ width: "80%" }}>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.comment}</p>
                </div>
                <div style={{ clear: "both" }}>
                  <hr className="my-4" />

                  <div style={{ fontSize: "18px", fontStyle: "italic" }}>
                    Post Time :{" "}
                    {moment(item.date).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                </div>
              </Alert>
            );
          })}
        </div>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <span style={{ fontSize: "35px", fontFamily: "Arial Black" }}>
                Enter your answer:
              </span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="What you want to share..."
              rows="4"
              name="answer"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="warning" type="submit" onClick={this.postAnswer}>
            Answer
          </Button>
        </Form>
        <br />
        <a
          href="/society"
          className="badge badge-success"
          style={{ fontSize: "25px" }}
        >
          Back
        </a>
      </div>
    );
  }
}
