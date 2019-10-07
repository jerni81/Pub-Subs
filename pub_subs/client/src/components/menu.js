import React from 'react'
import {Link} from 'react-router-dom'


const Menu = (props) => {
  // let data = await props.getMenu()

  console.log('this is menu data', props.getMenu)
  const subs = props.getMenu.map((sub, id) => {
    return <div key="id">{sub.name}</div>
  })
  return (
    <div className="menu">
      {subs}
    </div>
  )
}

export default Menu;
