import React from 'react'
import {Link} from 'react-router-dom'


class Menu extends React.Component{

  constructor(props){
    super(props)
  }

  state = {
    showMenu:[]
  }

  componentDidMount = async () => {
    console.log('im here');
    // const menu = this.props.showMenu();
    // this.setState({
    //   showMenu: menu
    // })
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
