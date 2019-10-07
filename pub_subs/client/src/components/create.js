import React from 'react'
import {Link} from 'react-router-dom'


const Create = (props) => {
  const categories = {
    Meat: [],
    Veggies: [],
    Condiments: []
  }

  props.getIngred.forEach((ing)=> categories[ing.category].push(ing))

  const ingredients = Object.keys(categories).map((cat) => {
    return <>
      <h4>{cat}</h4>
      {categories[cat].map((ing) => <p>{ing.name}</p>)}
    </>
  })

  console.log('this is menu data', props.getIngred)
  return (
    <div className="menu">
      {ingredients}
    </div>
  )
}

export default Create;
