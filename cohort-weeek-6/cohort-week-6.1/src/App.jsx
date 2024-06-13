import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let count = 4;

function App() {
  
  const[todos,setTodos] = useState([{
    id : 1,
    title:"random",
    description : "anytime"
  },{
    id : 2,
    title:"random",
    description : "anytime"
  },{
    id : 3,
    title:"random",
    description : "anytime"
  }])
  
function addTodo(){
  setTodos([...todos,{
    id : count++,
    title : "updated todo",
    description : "updated"
  }])
}

  return (
    <>
      <button onClick={addTodo}>Add To Do</button>
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description}/>)}
  </>
  )
}
function Todo({title,description}){
  return<>
  <h1>{title}</h1>
  <h3>{description}</h3>
  </>
}

export default App
