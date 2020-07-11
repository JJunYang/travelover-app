import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./shared.css";
import { Row, Col, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default class TravelGuideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelGuide: this.props.item,
      author: {},
    };
  }
  componentDidMount() {
    axios.get(`/user/${this.props.item.author._id}`).then((res) => {
      this.setState({ author: res.data });
    });
  }
  render() {
    return (
      <Card className="travelGuide-card">
        <Link
          to={`/travelGuides/details/${this.state.travelGuide._id}`}
          className="travelGuide-link"
        >
          <hr className="travelGuide-hr"></hr>
          <div className="journal-title">
            <img
              src={process.env.PUBLIC_URL + "/Icon/journal.png"}
              alt="journalIcon"
              className="journal-title-icon"
            ></img>
            <p className="journal-title-content">
              From
              <span className="journal-title-type">
                {this.state.travelGuide.type}
              </span>
            </p>
          </div>
          <Card.Title>{this.state.travelGuide.title}</Card.Title>
          <Row>
            <Col className="col-md-3 col-12 col-sm-4">
              <img
                src={this.state.travelGuide.pic}
                alt=""
                className="journal-content-img"
              ></img>
            </Col>
            <Col className="journal-item-block">
              <div className="journal-item-description">
                {this.state.travelGuide.content[0].content.slice(0, 160)}...
              </div>
              <div className="journal-author-block">
                <Image
                  src={this.state.author.pic}
                  className="journal-author-pic"
                  alt="journal-author-pic"
                  roundedCircle
                />
                <span className="journal-item-details">
                  <span>Author:</span>
                  <Badge className="journal-item-username">
                    {this.state.author.username}
                  </Badge>
                  <img
                    src={process.env.PUBLIC_URL + "/Icon/view.png"}
                    alt="journal-icon-views"
                    className="journal-icon-views"
                  ></img>
                  <span className="journal-item-views">
                    Views: {this.state.travelGuide.likeNum}
                  </span>
                </span>
              </div>
            </Col>
          </Row>
        </Link>
      </Card>
    );
  }
}
