import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello(){
  return <p>Hello, React!</p>
}

function Bye(){
  return <p>Bye react!</p>
}

function App(){
  return (
    <div><Hello/> 
    <Bye/>
    </div>

  );
}


export default App
