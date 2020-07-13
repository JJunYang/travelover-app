import React, { Component, Fragment } from "react";
import { Image, Container, ListGroup, Row, Col } from "react-bootstrap";
import axios from "axios";

export default class JournalDetails extends Component {
  state = {
    _id: "",
    title: "",
    pic: "",
    type: "",
    author: {},
    likeNum: 0,
    viewNum: 0,
    details: {},
    date: "",
    schedule: [],
    content: [],
    authorPic: "",
    like: "Upvote",
  };
  async componentDidMount() {
    await axios
      .get(`/journals/details/${this.props.match.params._id}`)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          title: response.data.title,
          pic: response.data.pic,
          type: response.data.type,
          author: response.data.author,
          likeNum: response.data.likeNum,
          viewNum: response.data.viewNum,
          details: response.data.details,
          date: response.data.date.slice(0, 10),
          schedule: response.data.schedule,
          content: response.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    await axios.get(`/user/${this.state.author._id}`).then((res) => {
      this.setState({ authorPic: res.data.pic });
    });
    axios({
      url: "/journals/addViewNum",
      method: "put",
      data: { _id: this.state._id, viewNum: this.state.viewNum },
    });
  }

  changeLike = () => {
    if (this.state.like === "Upvote") {
      this.setState({ like: "Cancel" });
      const changedNum = parseInt(this.state.likeNum) + 1;
      const data = {
        _id: this.state._id,
        likeNum: this.state.likeNum,
      };
      axios({
        url: "/journals/addlikeNum",
        method: "put",
        data: data,
      })
        .then((res) => {
          this.setState({
            likeNum: changedNum,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({ like: "Upvote" });
      const changedNum = parseInt(this.state.likeNum) - 1;
      const data = {
        _id: this.state._id,
        likeNum: this.state.likeNum,
      };
      axios({
        url: "/journals/cutlikeNum",
        method: "put",
        data: data,
      })
        .then(() => {
          this.setState({
            likeNum: changedNum,
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
          className="d-block w-100 travel-details-toppic"
          src={this.state.pic}
          alt="top pic"
        />
        <Container className="journal-journal-detail">
          <div className="journal-details-title">
            <Row>
              <Col className="col-4 col-sm-3 col-md-2 col-lg-1">
                <Image
                  src={this.state.authorPic}
                  className="journal-title-pic"
                  roundedCircle
                />
              </Col>
              <Col className="col-8 col-sm-4 col-md-6 col-lg-8">
                <div className="journal-title-midBlock">
                  <p className="journal-title-username">
                    {this.state.author.username}
                  </p>
                  <p className="journal-title-date">{this.state.date}</p>
                  <p>Likes: {this.state.likeNum}</p>
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
                    Total Days/ {this.state.details.totaldate}
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
        <Container className="journal-content-block">
          <div className="journal-content-leftside col-12 col-lg-9">
            <h2 className="journal-content-title">{this.state.title}</h2>
            {this.state.content.map((item, i) => {
              return (
                <div key={i} id={item._id}>
                  {item.title === "" ? (
                    ""
                  ) : item.title === "default" ? (
                    ""
                  ) : (
                    <div className="journal-content-subtitle">{item.title}</div>
                  )}
                  <p className="journal-content-paragragh">{item.content}</p>
                  {item.pic === "" ? (
                    ""
                  ) : (
                    <img className="d-block w-100" src={item.pic} alt=""></img>
                  )}
                </div>
              );
            })}
          </div>
          <div className="journal-content-rightside col-3">
            <h4 className="journal-timeline-title">Schedule Recommendation</h4>
            {this.state.schedule.map((item, i) => {
              return (
                <div key={i}>
                  <h5>- Day {i + 1} -</h5>
                  <p className="journal-timeline-description">{item}</p>
                </div>
              );
            })}
            <div className="journal-content">
              <hr></hr>
              <h4 className="journal-content-title">Content</h4>
              <ul className="journal-content-ul">
                {this.state.content.map((content, i) => {
                  return (
                    <div key={i}>
                      {content.title === "" ? (
                        ""
                      ) : (
                        <li>
                          <a href={`#${content._id}`}>{content.title}</a>
                        </li>
                      )}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
