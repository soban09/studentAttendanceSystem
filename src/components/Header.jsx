import React from 'react'
import { BsPlusLg } from "react-icons/bs";

const Header = ({ openModal }) => {

  const openModalHandler = () => {
    openModal(true)
  }

  return (
    <div className='header'>
      <h1>Attendance Record System</h1>
      <div>
        <BsPlusLg onClick={openModalHandler} className='add_icon' />
        <h3>Add Student</h3>
      </div>
    </div>
  )
}

export default Header