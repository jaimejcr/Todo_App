import React, { useState } from 'react';
import { Formulary } from './Form';


export const TodoList = ({tasks}) => {


  const [note, setNote] = useState('');


  const handleNoteChange = (inputValues) => {
    const { input1, input2, input3, input4 } = inputValues;
    setNote(
      <>
    {input1}
    <br />
    Priority: {input2}
    <br />
    Deadline: {input3}
    <br />
    #{input4}
  </>
    );
  };

  return (
    <div>
      {tasks.map((element)=>{
        return (
          <p>
            {element.input1}
            {element.input2}
            {element.input3}
            {element.input4}
          </p>
        )
      })}
      <div>{note}</div>
      
      {/* <Formulary onNoteChange={handleNoteChange} /> */}
    </div>
  );
};






//crear notas con botón de delete y de done. El primero eliminará la tarea; el segundo la marcará como completada (tachará el texto).





