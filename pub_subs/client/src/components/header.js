import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/home"><h1>Pub Subs</h1></Link>
      {props.currentUser ? (
        <Link><button onClick={props.handleLogout}>Logout</button></Link>
      ):(
        <Link to="/login"><button>Login</button></Link>
    )}
    </div>
  )
}

export default Header;
