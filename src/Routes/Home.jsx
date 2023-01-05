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
      <Link to='/presentlist'>
        <div>
          check who all are present today
        </div>
      </Link>
    </div>
  )
}

export default Home