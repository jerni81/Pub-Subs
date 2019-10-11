import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import {
  loginUser,
  registerUser,
  verifyUser,
  showMenu,
  showIngred,
  newSand,
  deleteSand,
  editSand
} from "./services/api-helper";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    authFormData: {
      email: "",
      password: ""
    },
    currentUser: null,
    menuData: []
  };

  //==================================
  //============AUTH==================
  //==================================

  handleLogin = async e => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/home");
  };

  handleRegister = async e => {
    e.preventDefault();
    console.log(this.state.authFormData);
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/home");
  };

  handleLogout = () => {
    console.log("hello");
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
  };

  authHandleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  };

  //==========API Functions===========

  componentDidMount = async () => {
    this.handleVerify();
    const menu = await showMenu();
    this.setState({
      menuData: menu
    });
  };

  handleNew = async sandData => {
    const newSandy = await newSand(sandData);
    this.setState(prevState => ({
      menuData: [...prevState.menuData, newSandy]
    }));
  };

  handleDelete = async (e, id) => {
    e.preventDefault();

    console.log("im here", id);
    await deleteSand(id);
    const menu = await showMenu();
    console.log(menu);
    console.log("this is menu", menu);
    this.setState({
      menuData: menu
    });
  };

  handleEdit = async (id, sandData) => {
    const updatedSub = await editSand(id, sandData);
    this.setState(prevState => ({
      menuData: prevState.menuData.map(sub =>
        sub.id === updatedSub.id ? updatedSub : sub
      )
    }));
  };

  render() {
    return (
      <div className="App">
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
          makeNew={this.handleNew}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          showMenu={showMenu}
        />
      </div>
    );
  }
}

export default withRouter(App);
