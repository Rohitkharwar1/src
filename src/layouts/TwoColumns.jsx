import React from "react";
import "../assets/styles/layouts.twoCol.css";

function TwoColumns({ children }) {
  return <div className="d-flex flex-row ">{children}</div>;
}

export default TwoColumns;
