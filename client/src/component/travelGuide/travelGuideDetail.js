import React, { Component, Fragment } from "react";
import { Image, Container, ListGroup, Row, Col, Button } from "react-bootstrap";
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
        <div style={{ marginTop: "10px" }}>
          <Container>
            <Row>
              <Col xs={{ span: 7, offset: 0 }}>
                <Image
                  src={this.state.pic[2]}
                  roundedCircle
                  style={{ width: "100px", height: "100px" }}
                />
                <span style={{ color: "orange", marginLeft: "30px" }}>
                  {this.state.authorname}
                </span>
                <span style={{ color: "grey", marginLeft: "30px" }}>
                  {this.state.date}
                </span>
                <span style={{ color: "grey", marginLeft: "30px" }}>
                  clickNum: {this.state.clickNum}
                </span>
                <Button
                  variant="light"
                  style={{
                    marginLeft: "20px",
                    width: "120px",
                    marginTop: "0px",
                  }}
                  onClick={this.changeLike}
                >
                  {this.state.like === "Upvote" ? (
                    <>
                      <Image
                        src={process.env.PUBLIC_URL + "/Icon/starempty.png"}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "10px",
                        }}
                      />
                      {this.state.like}
                    </>
                  ) : (
                    <>
                      <Image
                        src={process.env.PUBLIC_URL + "/Icon/starfull.png"}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "10px",
                        }}
                      />
                      {this.state.like}
                    </>
                  )}
                </Button>
              </Col>
              {/* <Col xs={1}>
                        
                    </Col> */}
              <Col xs={{ span: 3, offset: 2 }}>
                <ListGroup variant="flush" style={{ fontSize: "10px" }}>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/date.png"}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px",
                      }}
                      alt=""
                    />
                    Start Date/ {this.state.details.startdate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/totaldate.png"}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px",
                      }}
                      alt=""
                    />
                    Total Date/ {this.state.details.totaldate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/with.png"}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px",
                      }}
                      alt=""
                    />
                    With/ {this.state.details.with}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img
                      src={process.env.PUBLIC_URL + "/Icon/cost.png"}
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px",
                      }}
                      alt=""
                    />
                    Costs/ {this.state.details.cost}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>
        <hr></hr>
        <Container>
          <h2 style={{ color: "orange", fontStyle: "italic" }}>
            {this.state.title}
          </h2>
          <br />
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
