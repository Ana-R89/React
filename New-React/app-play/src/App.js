import './App.css';
import React, { useState } from 'react'
import Boxes from './Boxes/Boxes';
import MessageForm from './Boxes/MessageForm'


function App() {

  const [currentMsg, setCurrentMsg] = useState("There are no messages")

  return (
    <div>
      <h1>Boxes Generator</h1>
      <Form />
    </div>
  )
}

export default App

