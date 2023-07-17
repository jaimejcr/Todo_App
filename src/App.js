import React, { useState } from "react";
import {Formulary } from "./components/Form"
import { TodoList } from "./components/Todo"

export default function Form() {

	const [tasks, setTasks] = useState([]);

	return (
		<>
			<Formulary setTasks={setTasks}/>
			<TodoList tasks={tasks} />
		</>
	);
}
 











// import React, { useState } from 'react';

// const NoteComponent = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [note, setNote] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setNote(inputValue);
//     setInputValue('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Write a note..."
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {note && <div className="note">{note}</div>}
//     </div>
//   );
// };


