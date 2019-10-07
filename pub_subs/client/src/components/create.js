import React from 'react'
import {Link} from 'react-router-dom'


const Create = (props) => {
  // let data = await props.getMenu()

  console.log('this is menu data', props.getIngred)
  const ingredients = props.getIngred.map((ingredients, id) => {
    return <div key="id">{ingredients.name} {ingredients.category}</div>
  })
  return (
    <div className="menu">
      {ingredients}
    </div>
  )
}

export default Create;
