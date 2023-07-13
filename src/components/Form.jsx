import React, { useState } from "react";

export const Formulary = () => {
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
            <select>
               <option value="Low" >Low</option>
               <option value="Medium" >Medium</option>
               <option value="High" >High</option>
            </select>
            
            <label>Deadline:</label>
            <input
                style={{}}
                type="date"
                name="input3"
                value={inputValues.input3}
                onChange={handleInputChange}
                
            />
            <label>Tag:</label>
            <input
                type="text"
                name="input4"
                value={inputValues.input4}
                onChange={handleInputChange}
                
            />
        </div>
    </form>
  );
};
