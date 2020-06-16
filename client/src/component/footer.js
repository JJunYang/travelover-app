import React, { Component } from "react";
import Image from "react-bootstrap/Image";

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="footer"
        className="jumbotron text-center"
        style={{ marginBottom: "0", marginTop: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md">
              <small className="d-block mb-3 text-muted">
                &copy; 2019-2020
              </small>
              <Image
                src={require("../Icon/google.png")}
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <Image
                src={require("../Icon/Twitter.png")}
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              <Image
                src={require("../Icon/linkedin.png")}
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
