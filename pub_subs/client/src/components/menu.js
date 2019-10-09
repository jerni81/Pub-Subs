import React from 'react'
import {Link} from 'react-router-dom'


const Menu = (props) => {

  console.log('this is menu data', props.getMenu)
  const subs = props.getMenu.map((sub, id) => {
    return <form key="id">
        <label>
        {sub.name}
          <input
            type="number"
            min="1"
            max="5"
          />
        </label>
      </form>
  })
  return (
    <div className="menu">
      {subs}
    </div>
  )
}

export default Menu;
