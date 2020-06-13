import React, { Component } from "react";
import axios from "axios";

export default class GroupTourDetail extends Component {
  state = {
    tourDetail: {},
  };
  componentDidMount() {
    axios.get(`/groupTours/${this.props.match.params._id}`).then((res) => {
      this.setState({ tourDetail: res.data });
    });
  }

  handleBook = () => {
    if (
      localStorage.getItem("userName") === null ||
      localStorage.getItem("userName") === ""
    ) {
      alert("You need to log in to buy it!");
      this.props.history.push("/login");
    } else {
      this.props.history.push(
        `/groupTours/${this.state.tourDetail._id}/paypal`
      );
    }
  };
  render() {
    return (
      <div>
        <div
          className="container-fluid"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "15%",
          }}
        >
          <div className="card mb-3" style={{ maxWidth: "1000px" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={this.state.tourDetail.img}
                  className="card-img"
                  alt="Noimage"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.state.tourDetail.title}</h5>
                  <h5 className="card-text" style={{ color: "gold" }}>
                    ${this.state.tourDetail.price}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleBook}
                  >
                    Book
                  </button>
                  <p className="card-text">
                    <img
                      alt=""
                      src={require("../../Icon/date2.png")}
                      style={{ width: "20px", height: "20px" }}
                    />
                    <small className="text-muted">
                      {this.state.tourDetail.date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{ filter: "alpha(opacity=100,finishopacity=0,style=2)" }}
          width="80%"
          color="#6f5499"
          size="10"
        />
        <div
          className="container-fluid"
          style={{
            paddingTop: "10px",
            paddingBottom: "10    px",
            paddingLeft: "15%",
          }}
        >
          <h5>Description</h5>
        </div>
        <hr
          style={{ filter: "alpha(opacity=100,finishopacity=0,style=2)" }}
          width="80%"
          color="#6f5499"
          size="10"
        />
        <div
          className="container-fluid"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "15%",
            paddingRight: "15%",
          }}
        >
          {this.state.tourDetail.details}
        </div>
      </div>
    );
  }
}
