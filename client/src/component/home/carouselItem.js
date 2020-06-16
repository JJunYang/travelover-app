import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class CarouselBlock extends Component {
  render() {
    return (
      <Carousel style={{marginTop:"55px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://p1-q.mafengwo.net/s16/M00/77/7C/CoUBUl6W-o-APCKAAB5egALLR6A580.png?imageMogr2%2Finterlace%2F1`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>
              <strong>16</strong>/Apr.2020
            </h2>
            <p>Cross Indonesia and ride a motorcycle to the volcano.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://b1-q.mafengwo.net/s16/M00/EF/EB/CoUBUl6VpxGAQZXZABt3WtRcTzg464.png?imageMogr2%2Finterlace%2F1`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>
              <strong>15</strong>/Apr.2020
            </h2>
            <p>Summer in the Netherlands makes the dream life clear.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://p1-q.mafengwo.net/s16/M00/62/5D/CoUBUl6UgG2AXyYjAChqbqtQEEY021.png?imageMogr2%2Finterlace%2F1`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>
              <strong>15</strong>/Apr.2020
            </h2>
            <p>Yili wind chaser: Pursue fortune in nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://b1-q.mafengwo.net/s16/M00/95/A7/CoUBUl6Sw7qAUzCaABgGKhmLqEs982.png?imageMogr2%2Finterlace%2F1`}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h2>
              <strong>13</strong>/Apr.2020
            </h2>
            <p>The distant place we choose is rich in sunshine.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
