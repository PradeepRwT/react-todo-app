import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='bg-gray-900 w-full h-screen flex justify-center gap-15 p-20'>
      <Create />
      <Read />
    </div>
  )
}

export default App
