import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './components/context'

function App() {
  const [count, setCount] = useState(0);

//wrap anyone that wants to use the teleported value inside a provider

  return (
    <>
    <CountContext.Provider value = {{count,setCount}}>
      <Count count = {count} setCount = {setCount}/>
      </CountContext.Provider>
    </>
  )
}
function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Button  setCount = {setCount}/>
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button(){
  const {count,setCount} = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count+1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App
