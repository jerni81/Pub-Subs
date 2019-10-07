import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import { loginUser, registerUser, verifyUser, showMenu, showIngred } from './services/api-helper'

class App extends Component {
  state={
    authFormData: {
      email: '',
      password: ''
    },
    currentUser: null,
    menuData: [],
    ingredData: []
  }

  //==================================
  //============AUTH==================
  //==================================

  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({currentUser});
  }

  handleRegister = async (e) => {

    e.preventDefault();
    console.log(this.state.authFormData);
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({currentUser});
  }

  handleLogout = () => {
    console.log('hello');
      this.setState({
        currentUser: null
      })
      localStorage.removeItem("authToken");
    }


  authHandleChange = (e) => {
     const {name, value} = e.target;

     this.setState(prevState => ({
       authFormData: {
         ...prevState.authFormData,
         [name]: value
       }
     }))
   }

   handleVerify = async () => {
     const currentUser = await verifyUser();
     if (currentUser) {
       this.setState({ currentUser})
     }
   }

   //==========API Functions===========

   componentDidMount = async () => {
     this.handleVerify()
      const menu = await showMenu();
      console.log('this is menu', menu)
      this.setState({
        menuData: menu
      })
      const ingredients = await showIngred();
      console.log('this is menu', ingredients)
      this.setState({
        ingredData: ingredients
      })
   }

  render() {
    return (
      <div className='App'>
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Main
          authFormData={this.state.authFormData}
          authHandleChange={this.authHandleChange}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          getMenu={this.state.menuData}
          getIngred={this.state.ingredData}
        />
        <Footer />

      </div>
    )
  }
}

export default App;
