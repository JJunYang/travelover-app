import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export default class GroupTour extends Component {
  state = {
    groupTourList: [],
  };
  componentDidMount() {
    axios
      .get("/groupTours")
      .then((res) => {
        this.setState({ groupTourList: res.data });
      })
      .then(() => {
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1 align="center">Group Tour List</h1>
        {this.state.groupTourList.map((result, key) => {
          return (
            <div
              key={key}
              className="container-fluid"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "10%",
              }}
            >
              <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={result.img} className="card-img" alt="Noimage" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{result.title}</h5>
                      <p className="card-text">{result.details}</p>

                      <p className="card-text">
                        <img
                          alt=""
                          src={require("../../Icon/date2.png")}
                          style={{ width: "20px", height: "20px" }}
                        />
                        <small className="text-muted">{result.date}</small>
                      </p>
                      <Row>
                        <Col>
                          <h5 className="card-text" style={{ color: "gold" }}>
                            {result.price}
                          </h5>
                        </Col>
                        <Col>
                          <Link to={`/groupTours/${result._id}`}>
                            <button
                              type="button"
                              className="btn btn-info btn-sm"
                              style={{ marginBottom: "20px" }}
                            >
                              View Detail
                            </button>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
