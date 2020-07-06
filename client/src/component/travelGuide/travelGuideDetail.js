import React, { Component, Fragment } from "react";
import { Image, Container, ListGroup, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class TravelGuideDetails extends Component {
  state = {
    title: "",
    description: "",
    pic: "",
    type: "",
    authorname: "",
    clickNum: 0,
    details: {},
    detailpics: [],
    date: "",
    detialdata: [],
    like: "Upvote",
  };
  componentDidMount() {
    axios
      .get(`/travelGuides/details/${this.props.match.params._id}`)
      .then((response) => {
        this.setState({
          title: response.data.title,
          clickNum: response.data.clickNum,
          date: response.data.date.slice(0, 10),
          description: response.data.description,
          detailpics: response.data.detailpics,
          details: response.data.details,
          pic: response.data.pic,
          type: response.data.type,
          authorname: response.data.author.username,
          detialdata: response.data.details.detail,
        });
      })
      .then(() => {
        console.log(this.state.travelGuide);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeLike = () => {
    if (this.state.like === "Upvote") {
      this.setState({ like: "Cancel" });
      const changedNum = parseInt(this.state.clickNum) + 1;
      const data = {
        title: this.state.title,
        clickNum: this.state.clickNum,
      };
      axios({
        url: "/travelGuides/addClickNum",
        method: "put",
        data: data,
      })
        .then((res) => {
          this.setState({
            clickNum: changedNum,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ like: "Upvote" });
      const changedNum = parseInt(this.state.clickNum) - 1;
      const data = {
        title: this.state.title,
        clickNum: this.state.clickNum,
      };
      axios({
        url: "/travelGuides/cutClickNum",
        method: "put",
        data: data,
      })
        .then((res) => {
          this.setState({
            clickNum: changedNum,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Fragment>
        <img
          className="d-block w-100"
          src={this.state.pic[1]}
          style={{ height: "300px" }}
          alt="top pic"
        />
        <Container className="travelGuide-journal-detail">
          <div className="journal-details-title">
            <Row>
              <Col className="col-4 col-sm-3 col-md-2 col-lg-1">
                <Image
                  src={this.state.pic[2]}
                  className="journal-title-pic"
                  roundedCircle
                />
              </Col>
              <Col className="col-8 col-sm-4 col-md-6 col-lg-8">
                <div className="journal-title-midBlock">
                  <p className="journal-title-username">
                    {this.state.authorname}
                  </p>
                  <p className="journal-title-date">{this.state.date}</p>
                  <p>Likes: {this.state.clickNum}</p>
                  <p onClick={this.changeLike} className="journal-title-upvote">
                    {this.state.like === "Upvote" ? (
                      <>
                        <Image
                          src={process.env.PUBLIC_URL + "/Icon/loveempty.png"}
                          className="journal-star-pic"
                        />
                        {this.state.like}
                      </>
                    ) : (
                      <>
                        <Image
                          src={process.env.PUBLIC_URL + "/Icon/lovefull.png"}
                          className="journal-star-pic"
                        />
                        {this.state.like}
                      </>
                    )}
                  </p>
                </div>
              </Col>
              <Col className="col-12 col-sm-5 col-md-4 col-lg-3">
                <ListGroup variant="flush" style={{ fontSize: "10px" }}>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/date.png"}
                      className="journal-rightblock-icon"
                      alt=""
                    />
                    Start Date/ {this.state.details.startdate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/totaldate.png"}
                      alt=""
                      className="journal-rightblock-icon"
                    />
                    Total Date/ {this.state.details.totaldate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/with.png"}
                      alt=""
                      className="journal-rightblock-icon"
                    />
                    With/ {this.state.details.with}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/cost.png"}
                      alt=""
                      className="journal-rightblock-icon"
                    />
                    Costs/ {this.state.details.cost}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Container>
        <hr></hr>
        <Container className="travelGuide-content-block">
          <h2 className="journal-content-title">{this.state.title}</h2>
          <br />
          {this.state.detialdata.map((item, i) => {
            return (
              <div key={i}>
                <h3>{item.Day}</h3>
                <p>{item.Des}</p>
              </div>
            );
          })}
          <br></br>
          {this.state.detailpics.map((item, i) => {
            return (
              <div key={i}>
                <p>{item.alt}</p>
                <img className="d-block w-100" src={item.src} alt=""></img>
                <br></br>
              </div>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}
