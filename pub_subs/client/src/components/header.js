import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
     <div className="flogo">
      <Link to="/home" className="logo"><img src="https://cutpcdnwimages.azureedge.net/-/media/images/publix/publix_brandmark.svg?h=50&w=50&la=en&hash=1E0E8ECA9D5C03DA3FE5FE56151B481583A4812F" alt='logo'/></Link>
      <h1>ub Subs</h1>
     </div>
      {props.currentUser ? (
        <Link><button onClick={props.handleLogout}>Logout</button></Link>
      ):(
        <Link to="/login"><button>Login</button></Link>
    )}
    </div>
  )
}

export default Header;
