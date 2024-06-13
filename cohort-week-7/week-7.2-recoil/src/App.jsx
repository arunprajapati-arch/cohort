import { useContext } from 'react'
import { CountContext } from './components/context'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

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
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);
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
