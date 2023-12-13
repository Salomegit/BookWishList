import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Home pae</p>
   <Link to="/add">Add book</Link>
    </div>
  )
}

export default Home
