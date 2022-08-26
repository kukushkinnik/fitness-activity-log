import React from "react";

const TotalCal = ({ data }) => {
  return (
    <>
      {data.reduce(
        (sum, element) => (sum += Number.parseInt(element.calor)),
        0
      )}{" "}
      Cal
    </>
  );
};

export default TotalCal;
