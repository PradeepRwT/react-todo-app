import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  const [todos, settodos] = useState([])

  return (
    <div className='bg-gray-900 w-full h-screen flex justify-center gap-15 p-20'>
      <Create todos ={todos} settodos = {settodos} />
      <Read todos ={todos} settodos = {settodos}/>
    </div>
  )
}

export default App
