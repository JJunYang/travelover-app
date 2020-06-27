import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import PlaceCard from "../shared/placeCard";
import { Link } from "react-router-dom";

const StayBlock = ({ placeList,cityId,cityName }) => (
  <Container>
    <div className="sub-block-title">
      <h2 className="sub-block-name">Stay</h2>
      <Link
        to={`/explore/city/${cityName}&${cityId}/stay`}
        className="sub-block-seeall"
      >
        See All({placeList.length})
      </Link>
    </div>
    <Row className="sub-block-row">
      {placeList.map((item, i) => {
        return (
          <Col key={i} className="sub-block-col col-6 clo-md-4 col-lg-3">
            <PlaceCard place={item} />
          </Col>
        );
      })}
    </Row>
  </Container>
);
export default StayBlock;
