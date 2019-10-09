import React from 'react'
import Login from './login'
import Register from './register'
import Home from './home'
import Menu from './menu'
import Create from './create'
import Footer from './footer'
import {Route} from 'react-router-dom'

const Main = (props) => {
  const {email, password} = props.authFormData
  return (
    <div className="main">
    <Route path='/home' render={()=>(
      <Home
      />
    )} />
    <Route path='/login' render={()=>(
      <Login
        authFormData={props.authFormData}
        authHandleChange={props.authHandleChange}
        handleLogin={props.handleLogin}
      />
    )} />
    <Route path='/register' render={()=>(
      <Register
        authFormData={props.authFormData}
        authHandleChange={props.authHandleChange}
        handleRegister={props.handleRegister}
      />
    )} />
    <Route path='/menu' render={()=>(
      <Menu
        getMenu={props.getMenu}
        handleDelete={props.handleDelete}
      />
    )} />
    <Route path='/create' render={()=>(
      <Create
        getIngred={props.getIngred}
        makeNew={props.makeNew}
      />
    )} />
    <Footer />
    </div>
  )
}

export default Main;
