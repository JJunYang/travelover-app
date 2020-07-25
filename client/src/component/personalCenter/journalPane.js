import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const JournalPane = (props) => {
  return (
    <div id="journalPane">
      <Row>
        <Col className="col-6">
          <h2>My Journal</h2>
          <hr></hr>
          {props.journalList.length < 1 ? (
            <div>No Result</div>
          ) : (
            <>
              <ul className="journal-list">
                {props.journalList.map((journal, i) => {
                  return (
                    <li key={i} className="journal-li">
                      <Link to={`/journals/details/${journal._id}`}>
                        {journal.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </Col>
        <Col className="col-6">
          <h2>My Topic</h2>
          <hr></hr>
          {props.topicList.length < 1 ? (
            <div>No Result</div>
          ) : (
            <>
              <ul>
                {props.topicList.map((topic, i) => {
                  return (
                    <li key={i}>
                      <Link to={`/topic/details/${topic._id}`}>
                        {topic.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};
export default JournalPane;
