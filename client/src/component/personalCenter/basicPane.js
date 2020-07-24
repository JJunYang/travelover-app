import React from "react";
import { Table } from "react-bootstrap";

const BasicPane = (props) => {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <th>#</th>
          <td></td>
        </tr>
        <tr>
          <th>userEmail:</th>
          <td>{props.email}</td>
        </tr>
        <tr>
          <th>userName:</th>
          <td>{props.name}</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default BasicPane;
