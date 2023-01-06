import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/attendance'>
        <div>
          Mark your attendance
        </div>
      </Link>
    </div>
  )
}

export default Home