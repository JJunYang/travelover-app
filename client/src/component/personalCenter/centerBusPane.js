import React from "react";
import { Table } from "react-bootstrap";
import moment from "moment";

const CenterBusPane = (props) => {
  return (
    <>
      <h2 align="center">Bus Tickets List</h2>
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
          {props.busList.map((result, i) => {
            if (result === null || result === "") return <tr key={i}></tr>;
            else
              return (
                <tr key={i}>
                  <td>{result.busId}</td>
                  <td>{result.from}</td>
                  <td>{result.to}</td>
                  <td>{moment(result.date).format("YYYY-MM-DD HH:mm:ss")}</td>
                  <td>${result.price}</td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CenterBusPane;
