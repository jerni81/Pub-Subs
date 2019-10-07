# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sandwich.create!([
  {name: "Turkey Sub"},
  {name: "Ultimate Sub"},
  {name: "Italian Sub"},
  {name: "Ham Sub"},
  {name: "Roast Beef Sub"},
  {name: "Philly Cheese Sub"},
  {name: "Cuban"},
  {name: "Chicken Tender Sub"},
  {name: "Meatball Sub"}
  ])

Ingredient.create!([
  {name: "Ham",
  category: "Meat"},
  {name: "Turkey",
  category: "Meat"},
  {name: "Roast Beef",
  category: "Meat"},
  {name: "Meatballs",
  category: "Meat"},
  {name: "Chicken Tenders",
  category: "Meat"},
  {name: "Pork",
  category: "Meat"},
  {name: "Tomato",
  category: "Veggies"},
  {name: "Lettuce",
  category: "Veggies"},
  {name: "Onions",
  category: "Veggies"},
  {name: "Peppers",
  category: "Veggies"},
  {name: "Olives",
  category: "Veggies"},
  {name: "Cucumbers",
  category: "Veggies"},
  {name: "Mayo",
  category: "Condiments"},
  {name: "Mustard",
  category: "Condiments"},
  {name: "Spicy Mustard",
  category: "Condiments"},
  {name: "Oil",
  category: "Condiments"},
  {name: "Vinegar",
  category: "Condiments"},
  {name: "Salt",
  category: "Condiments"},
  {name: "Pepper",
  category: "Condiments"},
  ])
