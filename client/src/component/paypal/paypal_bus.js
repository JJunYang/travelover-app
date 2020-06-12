import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import moment from "moment";

class Paypal_Bus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bus: { _id: "", from: "", to: "", busId: "", date: "", price: "" },
    };
    this.fetchData();
  }

  fetchData = async () => {
    const _id = this.props.match.params._id;
    console.log(_id);

    await axios({
      url: `/tickets/bus/${_id}`,
      method: "GET",
    }).then((res) => {
      this.setState({ bus: res.data });
    });
    console.log(this.state.bus);
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
            <h5 className="card-title">From:</h5>
            <p className="card-title">{this.state.bus.from}</p>
            <h5 className="card-title">To:</h5>
            <p className="card-title">{this.state.bus.to}</p>
            <h5 className="card-title">Date and Time:</h5>
            <p className="card-title">
              {moment(this.state.bus.date).format("YYYY-MM-DD HH:mm:ss")}
            </p>
            <h5 className="card-title">Total amount:</h5>
            <h5 className="card-text" style={{ color: "gold" }}>
              ${this.state.bus.price}
            </h5>
            <PayPalButton
              amount={this.state.bus.price}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
                fetch(
                  `/tickets/bus/${localStorage.getItem("userID")}/${
                    this.state.bus._id
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
export default Paypal_Bus;
