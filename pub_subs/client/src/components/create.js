import React from "react";
import { showIngred } from "../services/api-helper";
import { Redirect } from "react-router-dom";

class Create extends React.Component {
  state = {
    ingredData: [],
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
    redirect: false,
    update: false
  };

  componentDidMount = async () => {
    // if (prevProps.getIngred !== this.props.getIngred) {
    const ingredients = await showIngred();
    this.setState({
      ingredData: ingredients
    });
    this.state.ingredData.forEach(ing => {
      this.setState(prevState => ({
        categories: {
          ...prevState.categories,
          [ing.category]: [...prevState.categories[ing.category], ing]
        }
      }));
    });
    // }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.makeNew(this.state.newSandwich);
    // this.props.showMenu();
    this.setState({
      redirect: true
    });
  };

  handleNameChange = e => {
    const { value } = e.target;
    this.setState(prevState => ({
      newSandwich: {
        ...prevState.newSandwich,
        name: value
      }
    }));
  };

  handleIngredientCheckboxChange = (e, ing) => {
    const { checked } = e.target;
    if (checked) {
      this.setState(prevState => ({
        newSandwich: {
          ...prevState.newSandwich,
          ingredients: [...prevState.newSandwich.ingredients, ing]
        }
      }));
    } else {
      this.setState(prevState => ({
        newSandwich: {
          ...prevState.newSandwich,
          ingredients: prevState.newSandwich.ingredients.filter(item => {
            return ing.id !== item.id;
          })
        }
      }));
    }
  };

  handleIngredientRadioChange = ing => {
    console.log(ing);
    this.setState(prevState => ({
      newSandwich: {
        ...prevState.newSandwich,
        ingredients: prevState.newSandwich.ingredients.filter(item => {
          return ing.category !== "Bread";
        })
      }
    }));
    this.setState(prevState => ({
      newSandwich: {
        ...prevState.newSandwich,
        ingredients: [...prevState.newSandwich.ingredients, ing]
      }
    }));
  };

  updateState = () => {
    if (this.state.update == false)
      this.setState({
        update: true
      });
  };

  render() {
    this.updateState();
    let redirect = this.state.redirect && (
      <Redirect
        to={{
          pathname: "/menu",

          redirectProp: true
        }}
      />
    );

    const ingredients = Object.keys(this.state.categories).map((cat, i) => {
      return (
        <div key={i} id={cat} className="inForm">
          {cat === "Bread" ? (
            <div className="ingredi">
              <h4>{cat}</h4>
              <div className="ingred">
                {this.state.categories[cat].map(ing => (
                  <label className="indiv">
                    {ing.name}
                    <input
                      type="radio"
                      name={cat}
                      id={ing.name}
                      onChange={() => this.handleIngredientRadioChange(ing)}
                    />
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="ingredi">
              <h4>{cat}</h4>
              <div className="ingred">
                {this.state.categories[cat].map(ing => (
                  <label className="indiv">
                    {ing.name}
                    <input
                      type="checkbox"
                      name={ing.name}
                      onChange={e =>
                        this.handleIngredientCheckboxChange(e, ing)
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    });
    return (
      <div className="create">
        {redirect}
        <form onSubmit={this.handleSubmit}>
          Name Your Sandwich <br />
          <input
            type="text"
            name="text"
            id="text"
            onChange={this.handleNameChange}
            className="inForm"
          />
          <div className="inForm">{ingredients}</div>
          <button className="inForm">Create Sandwich</button>
        </form>
      </div>
    );
  }
}

export default Create;
