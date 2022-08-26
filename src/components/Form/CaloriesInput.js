import React from "react";

const CalorieInput = ({ cal, handleCal }) => {
  return (
    <>
      Burned calories:{" "}
      <input
        required
        type="text"
        value={cal}
        onChange={handleCal}
        name="calories"
      />
    </>
  );
};

export default CalorieInput;
