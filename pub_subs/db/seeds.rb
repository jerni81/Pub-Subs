# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sandwich.create!([
  {name: "Turkey Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/093938-600x600-A.jpg",
  ingredients: [ white, ]},
  {name: "Ultimate Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/093935-600x600-A.jpg"},
  {name: "Italian Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/093933-600x600-A.jpg"},
  {name: "Ham Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/098723-600x600-A.jpg"},
  {name: "Roast Beef Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/098721-600x600-A.jpg"},
  {name: "Philly Cheese Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/094994-600x600-A.jpg"},
  {name: "Cuban",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/099633-600x600-A.jpg"},
  {name: "Chicken Tender Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/090355-600x600-A.jpg"},
  {name: "Meatball Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/097201-600x600-A.jpg"}
  ])

white = Ingredient.create(name: "White", category: "Bread")
wheat = Ingredient.create(name: "Wheat", category: "Bread")


Ingredient.create!([
  {name: "White",
  category: "Bread"},
  {name: "Wheat",
  category: "Bread"},
  {name: "Sunflower Seed",
  category: "Bread"},
  {name: "Pumpernickle",
  category: "Bread"},
  {name: "7 Grain",
  category: "Bread"},
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
  {name: "Pepper Jack",
  category: "Cheese"},
  {name: "Provolone",
  category: "Cheese"},
  {name: "Cheddar",
  category: "Cheese"},
  {name: "White Chedder",
  category: "Cheese"},
  ])
