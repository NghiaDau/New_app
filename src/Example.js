import React from "react";
import { useState } from "react";   
const Example = () =>{
    let [isShow,setIsShow] = useState(false);
    let [name,setName] = useState("");
    const showForm = () =>{
        setIsShow(!isShow)
    }
    const getName = (event) =>{
        setName(event.target.value);
    }

    const [items,setItems] = useState(["nghia","linh"]);
    const addItem = () =>{
        items.push(name)
        setItems([...items]);
    }
    return(
        <div>
            <div>
                <button onClick={showForm}>Add new</button>
            </div>
            {isShow ? (<div><input placeholder="Nhap ten" onChange={getName}></input>
                        <button onClick={addItem}>Add</button></div>) : ""}
            <div>
                <ul>
                    {items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Example;