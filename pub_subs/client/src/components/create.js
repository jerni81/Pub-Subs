import React from 'react'
import {Link, Redirect} from 'react-router-dom'


class Create extends React.Component {
  constructor(props){
    super(props)
  }

  state = {
    categories: {
      Bread: [],
      Meat: [],
      Veggies: [],
      Condiments: [],
      Cheese: []
    },
    newSandwich: {
      name: "",
      ingredients: []
    },
    redirect:false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.getIngred !== this.props.getIngred) {
      this.props.getIngred.forEach((ing) => {
        this.setState(prevState => ({
          categories: {
            ...prevState.categories,
            [ing.category]: [
              ...prevState.categories[ing.category],
              ing
            ]
          }
        }))
      })
    }
  }




  handleSubmit = (e) => {
    e.preventDefault()
    this.props.makeNew(this.state.newSandwich);
    // this.props.showMenu();
    this.setState({
      redirect:true
    })
  }

 handleNameChange = (e) => {
   const {value} = e.target
   this.setState(prevState => ({
     newSandwich: {
       ...prevState.newSandwich,
       name: value
     }
   }))
 }

 handleIngredientCheckboxChange = (e, ing) => {
   const {checked} = e.target
   if (checked) {
     this.setState(prevState => ({
       newSandwich: {
         ...prevState.newSandwich,
         ingredients: [
           ...prevState.newSandwich.ingredients,
           ing
         ]
       }
     }))
   } else {
     this.setState(prevState => ({
       newSandwich: {
         ...prevState.newSandwich,
         ingredients: prevState.newSandwich.ingredients.filter((item) =>{
           return ing.id !== item.id
         })
       }
     }))
   }
 }

 handleIngredientRadioChange = (ing) => {
  console.log(ing)
  this.setState(prevState => ({
    newSandwich: {
      ...prevState.newSandwich,
      ingredients: prevState.newSandwich.ingredients.filter((item) =>{
        return ing.category !== 'Bread'
      })
    }
  }))
  this.setState(prevState => ({
    newSandwich: {
      ...prevState.newSandwich,
      ingredients: [
        ...prevState.newSandwich.ingredients,
        ing
      ]
    }
  }))
 }

  render() {
    let redirect = this.state.redirect && <Redirect to={"/menu"}/>
    console.log(this.props)
    const ingredients = Object.keys(this.state.categories).map((cat) => {
      return <div id={cat} className="inForm">
       { cat == "Bread" ? (
         <div className="ingred">
          <h4>{cat}</h4>
          {this.state.categories[cat].map((ing) => (
            <label>{ing.name}
              <input
                type="radio"
                name={cat}
                id={ing.name}
                onChange={() => this.handleIngredientRadioChange(ing)}
              />
            </label>
          ))}
        </div> ) : (
        <div className="ingred">
          <h4>{cat}</h4>
          {this.state.categories[cat].map((ing) => (
            <label>{ing.name}
              <input
                type="checkbox"
                name={ing.name}
                onChange={(e) => this.handleIngredientCheckboxChange(e, ing)}
              />
            </label>
          ))}
        </div>
      )}
      </div>
    })
    return (
      <div className="create">
        {redirect}
        <form onSubmit={this.handleSubmit}>
          Name Your Sandwich <br/>
          <input type="text" name="text" id="text" onChange={this.handleNameChange} className="inForm" />
          <div className="inForm">{ingredients}</div>
          <button className="inForm">Create Sandwich</button>
        </form>
      </div>
    )
  }
}

export default Create;
