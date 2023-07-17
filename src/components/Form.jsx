import React, { useState } from "react";
import { TodoList } from "./Todo";

export const Formulary = ({setTasks}) => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onNotechange De Todo.js
    setTasks((prev)=>{
      // prev.push(inputValues);
      return [...prev, inputValues]
    })
    // Aquí todo list, renderiza la lista de tareas
    console.log(inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="divCreate" >
            <label>Insert todo:</label>
            <input
                className="searchInput"
                type="text"
                name="input1"
                value={inputValues.input1}
                onChange={handleInputChange}
                style={{
                    width: "300px",
                    borderRadius: '5px',
                    
                    padding: '10px',
                    border: '1px solid #ccc',
                  }}
                
            />
            <button style={{width: "100px", borderRadius:"5px", backgroundColor:"black", color:"white"}} className="btn" type="submit">Create</button>
        </div>

        <div className="divFiltro" >
            <label>Priority:</label>
            <select className="estiloInput"       name="input2" onChange={handleInputChange} >
               <option value="Low" >Low</option>
               <option value="Medium" >Medium</option>
               <option value="High" >High</option>
            </select>
            
            <label>Deadline:</label>
            <input
                className="estiloInput"
                type="date"
                name="input3"
                value={inputValues.input3}
                onChange={handleInputChange}
                
                
            />
            <label>Tag:</label>
            <input
                className="estiloInput"
                type="text"
                name="input4"
                value={inputValues.input4}
                onChange={handleInputChange}
                
            />
        </div>
    </form>
  );
};
