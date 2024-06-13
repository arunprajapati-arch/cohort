import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/Dashboard')) ;
const  Landing  = React.lazy(() => import('./components/Landing'));


function App() {
  
  return (
    <div>
      
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path = "/dashboard" element = {<Suspense fallback = {"loading..."}><Dashboard/></Suspense>}/>
        <Route path = "/" element = {<Suspense fallback = {"loading..."}><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

function Appbar(){
  const navigate = useNavigate();
  return (
<div style={{background: "red"}}>
        TOPBAR
        <button onClick={() => {
          navigate("/")
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
  )
}
export default App
