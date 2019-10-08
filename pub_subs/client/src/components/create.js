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
    return <div>
     { cat == "Meat" ? (<div className="ingred">
      <h4>{cat}</h4>
      {categories[cat].map((ing) => <label>{ing.name}<input type="checkbox" /></label>)}
    </div> ): (
      <div className="ingred">
        <h4>{cat}</h4>
        {categories[cat].map((ing) => <label>{ing.name}<input type="radio" name="radio"/></label>)}
      </div>
    )}

    </div>
  })

  console.log('this is menu data', props.getIngred)
  return (
    <div className="menu">
      <form>
        Name Your Sandwich <br/>
        <input type="text" />
        {ingredients}
        <button>Create Sandwich</button>
      </form>
    </div>
  )
}

export default Create;
