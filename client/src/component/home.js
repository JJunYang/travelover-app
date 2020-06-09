import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    message: "",
  };
  componentDidMount() {
    axios({
      url: "/api",
      method: "GET",
    })
    //   .then((json) => {
    //     console.log(json.data);
    //   })
      .then((res) => {
        this.setState({ message: res.data.message });
      });
  }
  render() {
    return <div style={{marginTop:"200px"}}>{this.state.message}</div>;
  }
}
