import React, {useEffect, useState} from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [cal, setCal] = useState("");
    const [data, setData] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setData((data) => [...data, {id: new Date(), date: date, time: time, calor: cal}]);
        setDate("");
        setTime("");
        setCal("");
    };

    const handleClear = (event) => {
        event.preventDefault();
        setData([]);
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
        <div className="App">
            <Form
                date={date}
                changeDate={e => setDate(e.target.value)}
                time={time}
                changeTime={e => setTime(e.target.value)}
                cal={cal}
                changeCal={e => setCal(e.target.value)}
                add={handleSubmit}
                clear={handleClear}
            />
            <Table data={data} del={handleDelete}/>
        </div>
    );
}

export default App;
