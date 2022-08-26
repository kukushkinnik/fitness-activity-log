import React from "react";

const TotalTime = ({ data }) => {
  return (
    <>
      {data.reduce((sum, element) => (sum += Number.parseInt(element.time)), 0)}{" "}
      min
    </>
  );
};

export default TotalTime;
