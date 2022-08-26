import React from "react";

import "./Table.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
  return (
    <table className="table">
      <TableHead />
      <TableBody data={props.data} del={props.del} />
    </table>
  );
};

export default Table;
