//import React, {ChangeEvent, useState} from "react";
//import {v4 as uuid4} from "uuid";
//import {itemsFromBackend} from "../InitialData/itemsFromBackend";
//import {columnsFromBackend} from "../InitialData/columns";
//import {IColumns} from "../../types";
//import styles from "./style.module.css"

//
//export const CreateItems = (props) => {
//    const [title, setTitle] = useState("")
//
//    const handleChange = (e) => {
//        e.preventDefault();
//        setTitle(e.target.value);
//    }
//    const createItem = () => {
//        const cont = title;
//        const newColumns ={...props.columns}
//        newColumns[Object.keys(newColumns)[0]].items.push({id: uuid4(), content: cont})
//        props.setColumns(newColumns)
//        setTitle("")
//    }
//
//    return (
//        <div className={styles.newItem}>
//            <input placeholder={"Buy bear"} className={styles.input} ref={(input)=>input} value={title} type="text" onChange={handleChange} ></input>
//            <button  className={styles.button} onClick={createItem}>Create do</button>
//        </div>
//    )
//
//}