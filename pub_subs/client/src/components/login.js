import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
  const {email, password} = props.authFormData
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={props.handleLogin}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={props.authHandleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={props.authHandleChange}
        />
        <button>Login</button>
        <h6>
        If you don't have a Login, then
        <Link to='/register'> Register </Link>
        here!
        </h6>
      </form>

    </div>
  )
}

export default Login;
