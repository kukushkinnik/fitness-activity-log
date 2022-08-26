// @ts-nocheck
import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import Table from "./Table/Table";

const Main = () => {
  const [id, setId] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cal, setCal] = useState("");
  const [data, setData] = useState([]);

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleCal = (event) => {
    setCal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let dat = { id: id, date: date, time: time, calor: cal };
    setData((data) => [...data, dat]);
    setId(id + 1);
    setDate("");
    setTime("");
    setCal("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    setData([]);
    setId(1);
    localStorage.clear();
  };

  const handleDelete = (id) => {
    const removeItem = data.filter((dat) => {
      return dat.id !== id;
    });
    setData(removeItem);
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(removeItem));
  };

  useEffect(() => {
    if (data.length !== 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("data") !== null) {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <>
      <Form
        date={date}
        changeDate={handleDate}
        time={time}
        changeTime={handleTime}
        cal={cal}
        changeCal={handleCal}
        add={handleSubmit}
        clear={handleClear}
      />
      <Table data={data} del={handleDelete} />
    </>
  );
};

export default Main;
