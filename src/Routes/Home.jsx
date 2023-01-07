import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div id='home'>
      <div className="get_started">
        <h1>Student Attendance System</h1>
        <p className='italic'>Take attendance of your students with ease</p>
        <p>Get started by clicking the button below</p>
        <Link to='/attendance'>
          <button>Get Started</button>
        </Link>
      </div>

    </div>
  )
}

export default Home