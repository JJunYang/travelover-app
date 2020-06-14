import React from "react";
import { Table } from "react-bootstrap";

const CenterHotelPane = (props) => {
  return (
    <>
      <h2 align="center">Hotel Tickets List</h2>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.hotelList.map((result, i) => {
            if (result === null || result === "") return <tr key={i}></tr>;
            else
              return (
                <tr key={i}>
                  <td>{result.hotelName}</td>
                  <td>{result.location}</td>
                  <td>${result.price}</td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CenterHotelPane;
