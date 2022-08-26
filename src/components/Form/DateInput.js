import React from "react";

const DateInput = ({ date, handleDate }) => {
  return (
    <>
      Date
      <input
        required
        type="date"
        value={date}
        onChange={handleDate}
        name="date"
      />
    </>
  );
};

export default DateInput;
