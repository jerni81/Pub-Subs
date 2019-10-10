import React from 'react'
import {Link} from 'react-router-dom'


class Menu extends React.Component{

  constructor(props){
    super(props)
  }

  state = {
    showMenu:[],
    hidden: true,
    name: ""
  }

  componentDidMount = async () => {
    console.log('im here');
    // const menu = this.props.showMenu();
    // this.setState({
    //   showMenu: menu
    // })
  }

  isHidden = (e) => {
    e.preventDefault();
    if (this.state.hidden) {
      this.setState({hidden: false})
    } else (
      this.setState({hidden: true})
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleEdit(this.state.name);
    this.setState({
      hidden:true
    })
  }

 handleNameChange = (e) => {
   const {value} = e.target
   this.setState(prevState => ({
    edited: value
   }))
 }

  render(){

    console.log(this.props)
  const subs = this.props.getMenu.map((sub) => {
    return <form key={sub.id}>
        <label>
        {sub.name}
          <input
            type="number"
            min="1"
            max="5"
          />
        </label>
        <button onClick={this.isHidden}>Edit Name</button>
        <input type="text" className={this.state.hidden ? 'hidden' : ''} onChange={this.handleNameChange}/>
        <button className={this.state.hidden ? 'hidden' : ''} onClick={this.handleSubmit}>Submit Name Change</button>
        <button onClick={(e) => this.props.handleDelete(e, sub.id)}>Delete</button>
      </form>
  })


    return (
      <div className="menu">
        {subs}
      </div>
    )
  }
}

export default Menu;
