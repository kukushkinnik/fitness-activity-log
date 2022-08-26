import React from "react";

const TimeInput = ({ time, handleTime }) => {
  return (
    <>
      Time(in minutes):{" "}
      <input
        required
        type="text"
        value={time}
        onChange={handleTime}
        name="time"
      />
    </>
  );
};

export default TimeInput;
