import React from "react";
import { Table } from "react-bootstrap";
import moment from "moment";

const CenterFlightPane = (props) => {
  return (
    <div id="ticketPane">
      <h2 align="center">Flight Tickets List</h2>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.flightList.map((result, i) => {
            if (result === null || result === "") return <tr key={i}></tr>;
            else
              return (
                <tr key={i}>
                  <td>{result.flightId}</td>
                  <td>{result.from}</td>
                  <td>{result.to}</td>
                  <td>{moment(result.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                  <td>${result.price}</td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CenterFlightPane;
