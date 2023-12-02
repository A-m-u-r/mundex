import React from "react";
import {useState, useEffect} from 'react';
import {start} from "../d";

function Get() {
    const [todoItems, setTodoItems] = useState([]);
    console.log(start.results)
    return (
        <div>
        {start.results.map(employee => {
            return (
                <div key={employee.id}>
                    <div>name: {employee.name}</div>
                    <div>country: {employee.time_start}</div>
                    <div>country: {employee.place}</div>
                    <div>country: {employee.date_start}</div>
                    <hr />
                </div>
            );
        })}
    </div>)}










export default Get;

//useEffect(() => {
// fetch('http://localhost:3010/api/to do-items')
//        .then((res) => res.json())
//        .then((result) => setTodoItems(result.data));
//}, []);