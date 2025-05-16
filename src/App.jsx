import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [title, settitle] = useState('')
 const [description, setdescription] = useState('')
 const [todos, settodos] = useState([])
 const [index, setindex] = useState('')

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
todos.splice(index, 1)
settodos([...todos])
};


const Edit = (index) => {

  console.log(todos[index]);
  settitle(todos[index].title)
  setdescription(todos[index].description)
  setindex(index);
  
};


const updatetodo = () => {
    let newtodo = {
      title: title,
      description: description
    }

    todos[index] = newtodo
    settodos([...todos])
}

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
    <div className="todo-item">
      <div key={index}></div>
      <h2>{todo.title} </h2>
      <h3>{todo.description}</h3>
      <button onClick={() => Edit(index)}   type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  ))
}



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input value={title} onChange={(e) => {settitle(e.target.value)}}/>
      <input value={description} onChange={(e) => {setdescription(e.target.value)}}/>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={updatetodo}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
