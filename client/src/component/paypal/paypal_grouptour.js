import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";

export default class Paypal_GroupTour extends Component {
  state = {
    tourDetail: {},
  };
  componentDidMount() {
    axios
      .get(`/groupTours/${this.props.match.params._id}`)
      .then((res) => {
        this.setState({ tourDetail: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div
          className="container-fluid"
          style={{
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          <div className="card mb-3">
            <h5 className="card-title">Tour name:</h5>
            <p className="card-title">{this.state.tourDetail.title}</p>
            <h5 className="card-title">Date:</h5>
            <p className="card-title">{this.state.tourDetail.date}</p>
            <h5 className="card-title">Total amount:</h5>
            <h5 className="card-text" style={{ color: "gold" }}>
              {this.state.tourDetail.price}
            </h5>
            <PayPalButton
              amount={this.state.tourDetail.price}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

                fetch(
                  `http://localhost:4000/booktour/${localStorage.getItem(
                    "userName"
                  )}/${this.state.tourDetail._id}`,
                  {
                    method: "put",
                  }
                );
                this.props.history.push("/grouptour");
              }}
              options={{
                clientId:
                  "AXyTOkfrFygPr7AHWjBf1vzGvkGV_CWHQGRDjmpytTVD6iZb2NU9W9Vjm4X8TVfJsQEXRgE7uDv2ZdDi",
                locale: "en_US",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
