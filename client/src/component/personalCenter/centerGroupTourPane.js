import React from "react";
import { Table } from "react-bootstrap";

const CenterGroupTourPane = (props) => {
  return (
    <>
      <h2 align="center">Group Tours List</h2>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.groupTourList.map((result, i) => {
            if (result === null || result === "") return <tr key={i}></tr>;
            else
              return (
                <tr key={i}>
                  <td>{result.title}</td>
                  <td>{result.date}</td>
                  <td>${result.price}</td>
                </tr>
              );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CenterGroupTourPane;
