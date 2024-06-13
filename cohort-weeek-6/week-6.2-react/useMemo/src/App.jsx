import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[inputValue,setInputValue] = useState(1)

let counter = useMemo(() => {
  let counter = 0
  for(let i =1;i<=inputValue;i++){
    counter = counter + i;
  }
  return counter;
},[inputValue]);

  return (
    <>
      <input onChange={(e) => {
        setInputValue(e.target.value);
      }} type="text" placeholder="sum from 1 to n" /><br /><br />
      Sum is {counter} <br /><br />
     <button onClick={() => setCount(count+1) }>counter({count})</button>
    </>
  )
}

export default App
