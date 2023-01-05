import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Attendance from './Routes/Attendance'
import PresentList from './Routes/PresentList'
import Success from './Routes/Success'
import Home from './Routes/Home'
import './index.css'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/attendance' element={<Attendance/>} />
      <Route path='/presentlist' element={<PresentList/>} />
      <Route path='/success' element={<Success/>} />
    </Routes>
  )
}

export default App