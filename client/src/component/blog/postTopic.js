import React, { Component } from "react";
import { Alert, Form } from "react-bootstrap";
import axios from "axios";

export default class postTopic extends Component {
  state = {
    title: "",
    description: "",
    tag: "food",
  };

  handleChange = async (e) => {
    const { name, value } = e.target;
    await this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  postTopic = () => {
    if (this.state.title.trim().length < 1) {
      alert("Your topic title cannot be empty.");
    } else if (this.state.tag.trim().length < 1) {
      alert("Your need to choose one tag.");
    } else if (this.state.description.trim().length < 1) {
      alert("Your topic description cannot be empty.");
    } else if (
      localStorage.getItem("userName") === null ||
      localStorage.getItem("userName") === ""
    ) {
      alert("Your need to log in to post a topic!");
      this.props.history.push("/login");
    } else {
      const data = {
        title: this.state.title,
        tag: this.state.tag,
        description: this.state.description,
        author: {
          id: localStorage.getItem("userID"),
          username: localStorage.getItem("userName"),
        },
      };
      axios({
        url: "/society/postTopic",
        method: "POST",
        data: data,
      }).then(() => {
        this.props.history.push("/society");
      });
    }
  };

  render() {
    return (
      <div
        id="postTopic"
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
            Whenever you need start discussion, please obey the rules. Enjoy
            yourselves!
          </p>
        </Alert>

        <br />
        <h2 style={{ textAlign: "center" }}>Topic</h2>
        <div style={{ width: "70%", margin: "auto" }}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Topic Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title..."
                name="title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Tag</Form.Label>
              <Form.Control as="select" name="tag" onChange={this.handleChange}>
                <option>food</option>
                <option>landscape</option>
                <option>tips</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Topic Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                maxLength="700"
                name="description"
                placeholder="please input less than 700 characters"
                onChange={this.handleChange}
              />
            </Form.Group>
            <button
              className="badge badge-warning"
              type="button"
              style={{ fontSize: "25px" }}
              onClick={this.postTopic}
            >
              Post Topic
            </button>
            <a
              href="/society"
              className="badge badge-dark"
              style={{ fontSize: "25px", marginLeft: "20px" }}
            >
              Cancel
            </a>
          </Form>
        </div>
      </div>
    );
  }
}
