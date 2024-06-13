import { useEffect, useState } from 'react'


function App() {

  const[todos,setTodos] = useState([{}]);
  const[id,setId] = useState(1);

useEffect(() => {
  fetch("https://sum-server.100xdevs.com/todos")
  .then(async(res) => {
    const json = await res.json();
    setTodos(json.todos);
  })
},[id])

  return (
    <>
    <button onClick={() => {
      setId(id+1);
    }}>Next</button>
     {todos.map(todo => <Todo title = {todo.title} description = {todo.description}/>)}
    </>
  )
}

function Todo({title,description}) {
  return<>
  <h1>{title}</h1>
  <h4>{description}</h4>
  </>
}
export default App
