import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PlaceCard from "../shared/placeCard";
import { Link } from "react-router-dom";

const SeeBlock = ({ placeList, cityName, cityId }) => (
  <Container>
    <div className="sub-block-title">
      <h2 className="sub-block-name">See & Do</h2>
      <Link
        to={`/explore/city/${cityName}&${cityId}/see-do`}
        className="sub-block-seeall"
      >
        See All({placeList.length})
      </Link>
    </div>
    <Row className="sub-block-row">
      {placeList.slice(0,4).map((item, i) => {
        return (
          <Col key={i} className="sub-block-col col-6 clo-md-4 col-lg-3">
            <PlaceCard place={item} />
          </Col>
        );
      })}
    </Row>
  </Container>
);
export default SeeBlock;
