import React, { useState } from 'react';

export const TodoList = () => {
    //para borrar
  const [tasks, setTasks] = useState([]);
  //para renderizar tarea
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };






}

//crear notas con botón de delete y de done. El primero eliminará la tarea; el segundo la marcará como completada (tachará el texto).





