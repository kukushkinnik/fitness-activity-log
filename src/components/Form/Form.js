import React from "react";
import AddButton from "./AddButton";
import CaloriesInput from "./CaloriesInput";
import ClearButton from "./ClearButton";
import DateInput from "./DateInput";
import "./Form.css";
import TimeInput from "./TimeInput";

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.add}>
      <DateInput date={props.date} handleDate={props.changeDate} />
      <TimeInput time={props.time} handleTime={props.changeTime} />
      <CaloriesInput cal={props.cal} handleCal={props.changeCal} />
      <div className="buttons">
        <AddButton />
        <ClearButton handleClear={props.clear} />
      </div>
    </form>
  );
};

export default Form;
