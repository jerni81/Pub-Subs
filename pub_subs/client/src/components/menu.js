import React from 'react'
import {showMenu} from '../services/api-helper'
class Menu extends React.Component{

  state = {
    getMenu: [],
    hidden: true,
    name: "",
    menuData: []
  }

  isHidden = (e) => {
    e.preventDefault();
    if (this.state.hidden) {
      this.setState({hidden: false})
    } else (
      this.setState({hidden: true})
    )
  }

  handleSubmit = (e, id) => {
    e.preventDefault()
    this.props.handleEdit(id, this.state.name);
    this.setState({
      hidden:true
    })
  }

 handleNameChange = (e) => {
   const {value} = e.target
   this.setState(prevState => ({
    name: value
   }))
 }

  render(){
  const subs = this.props.getMenu.map((sub) => {
    return <div className="menuItem">
      <img src={sub.photo} className="menuPhoto" alt="   Picture this... we're making your sandwich right now!!"/>
      <form key={sub.id}>
          <label className="indiv">
          {sub.name}
            <input
              type="number"
              min="1"
              max="5"
            />
          </label>
          <div className={sub.id > 9 ? null: 'hidden' }>
            <button onClick={this.isHidden}>Edit Name</button>
            <input type="text" className={this.state.hidden ? 'hidden' : ''} onChange={this.handleNameChange}/>
            <button className={this.state.hidden ? 'hidden' : ''} onClick={(e) =>this.handleSubmit(e, sub.id)}>Submit Name Change</button>
            <button onClick={(e) => this.props.handleDelete(e, sub.id)}>Delete</button>
          </div>
        </form>
      </div>
  })


    return (
      <div className="menu">
        {subs}
      </div>
    )
  }
}

export default Menu;
