import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <hr className="footer-top-hr"></hr>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="/">Cool stuff</a>
                </li>
                <li>
                  <a href="/">Random feature</a>
                </li>
                <li>
                  <a href="/">Team feature</a>
                </li>
                <li>
                  <a href="/">Stuff for developers</a>
                </li>
                <li>
                  <a href="/">Another one</a>
                </li>
                <li>
                  <a href="/">Last time</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a href="/">Resource</a>
                </li>
                <li>
                  <a href="/">Resource name</a>
                </li>
                <li>
                  <a href="/">Another resource</a>
                </li>
                <li>
                  <a href="/">Final resource</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small ">
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Locations</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <small className="d-block mb-3 text-muted">
                <div>Email: yang.jun3@northeastern.edu</div>
                <div>Phone: 8579303666</div>
              </small>
              <a href="https://www.linkedin.com/in/jjy-yang/">
                <Image
                  src={process.env.PUBLIC_URL + "/Icon/linkedin.png"}
                  className="footer-pic"
                />
              </a>
              <a href="https://github.com/jjyang1108">
                <Image
                  src={process.env.PUBLIC_URL + "/Icon/github.png"}
                  className="footer-pic"
                />
              </a>
              <Image
                src={process.env.PUBLIC_URL + "/Icon/facebook.png"}
                className="footer-pic"
              />
              <Image
                src={process.env.PUBLIC_URL + "/Icon/twitter.png"}
                className="footer-pic"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="text-muted text-center">
          COPYRIGHT &copy; 2020 Jun Yang
        </div>
      </div>
    );
  }
}
