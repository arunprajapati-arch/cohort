import { useContext } from 'react'
import { CountContext } from './components/context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

function App() {

//wrap anyone that wants to use the teleported value inside a provider

  return (
    <>
    <RecoilRoot>
      <Count  />
    </RecoilRoot> 
    </>
  )
}
function Count() {
  return <div>
    <CountRenderer />
    <Button  />
    <EvenRenderer />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button(){
  const  setCount = useSetRecoilState(countAtom);
  console.log("rerendered button");
  return <div>
    <button onClick={() => {
      setCount(count => count+1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count-1);
    }}>Decrease</button>
  </div>
}

function EvenRenderer() {
  const isEven= useRecoilValue(evenSelector);
  return <div>
    {(!isEven)? "It is even":null}
  </div>
}

export default App
