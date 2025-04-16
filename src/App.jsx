import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [title, settitle] = useState('')
 const [description, setdescription] = useState('')
 const [todos, settodos] = useState([])

 const add = () => {
  const newTodo = {
    title,
    description
  };

  settodos([...todos, newTodo]);
  settitle('')
  setdescription('')
 }

 
const deleteTodo = (index) => {
const newTodos = [...todos]
newTodos.splice(index, 1)
settodos(newTodos)
};


const Edit = (index) => {
  const theToDo = todos[index];

  const newTitle = prompt("New title here", theToDo.title);
  const newDescription = prompt("New description here", theToDo.description);


  const updatedToDo = {
    ...theToDo,
    title: newTitle,
    description: newDescription,
  };

  const updatedTodos = [...todos];
  updatedTodos[index] = updatedToDo;

  settodos(updatedTodos);
};

  return (
    <>
   <h1>To-do list</h1>
   <input value={title} onChange={(e) => {settitle(e.target.value)}} 
   type="text" placeholder='title' />
   <input value={description} onChange={(e) => {setdescription(e.target.value)}} 
   type="text" placeholder='description' />
   <button onClick={add}>Add</button>



   {
  todos.map((todo, index) => (
    <div className="todo-item" key={index}>
      <h2>
        {todo.title} 
      </h2>
      <h3>{todo.description}</h3>
      <button onClick={() => Edit(index)}>Edit</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  ))
}

    </>
  )
}

export default App
