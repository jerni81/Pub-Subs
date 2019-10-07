import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="home">
      <Link to="/menu"><h1>Menu</h1></Link>
      <Link to="/create"><h1>Create</h1></Link>
    </div>
  )
}

export default Home;
