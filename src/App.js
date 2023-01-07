import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Attendance from './Routes/Attendance'
import Home from './Routes/Home'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/attendance' element={<Attendance/>} />
    </Routes>
  )
}

export default App