import React from 'react'

const Register = (props) => {
  const {email, password} = props.authFormData
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={props.handleRegister}>
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
        <button>Register</button>
      </form>

    </div>
  )
}

export default Register;
