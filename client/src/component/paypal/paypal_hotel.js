import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";

export default class Paypal_Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: {
        _id: "",
        hotelName: "",
        location: "",
        hotelId: "",
        price: "",
      },
      date: new Date().toDateString(),
    };
    this.fetchData();
  }

  fetchData = async () => {
    const _id = this.props.match.params._id;
    console.log(_id);

    await axios({
      url: `/tickets/hotel/${_id}`,
      method: "GET",
    }).then((res) => {
      this.setState({ hotel: res.data });
    });
    console.log(this.state);
  };
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
            <h5 className="card-title">Hotel Name:</h5>
            <p className="card-title">{this.state.hotel.hotelName}</p>
            <h5 className="card-title">Location:</h5>
            <p className="card-title">{this.state.hotel.location}</p>
            <h5 className="card-title">Date:</h5>
            <p className="card-title">{this.state.date}</p>
            <h5 className="card-title">Total amount:</h5>
            <h5 className="card-text" style={{ color: "gold" }}>
              ${this.state.hotel.price}
            </h5>
            <PayPalButton
              amount={this.state.hotel.price}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

                fetch(
                  `/tickets/hotel/${localStorage.getItem("userID")}/${
                    this.state.hotel._id
                  }`,
                  {
                    method: "put",
                  }
                ).then(() => {
                  this.props.history.push("/tickets");
                });
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
