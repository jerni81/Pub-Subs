# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



white = Ingredient.create(name: "White", category: "Bread")
wheat = Ingredient.create(name: "Wheat", category: "Bread")
sunflower = Ingredient.create(name: "Sunflower Seed", category: "Bread")
pumpernickle = Ingredient.create(name: "Pumpernickle", category: "Bread")
grain = Ingredient.create(name: "7 Grain", category: "Bread")
cuban = Ingredient.create(name: "Cuban Bread", category: "Bread")
ham = Ingredient.create(name: "Ham", category: "Meat")
turkey = Ingredient.create(name: "Turkey", category: "Meat")
ham = Ingredient.create(name: "Ham", category: "Meat")
beef = Ingredient.create(name: "Roast Beef", category: "Meat")
steak = Ingredient.create(name: "Steak", category: "Meat")
chicken = Ingredient.create(name: "Chicken Tenders", category: "Meat")
meatballs = Ingredient.create(name: "Meatballs", category: "Meat")
pork = Ingredient.create(name: "Roast Pork", category: "Meat")
ham = Ingredient.create(name: "Ham", category: "Meat")
toms = Ingredient.create(name: "Tomato", category: "Veggies")
lettuce = Ingredient.create(name: "Lettuce", category: "Veggies")
onions = Ingredient.create(name: "Onions", category: "Veggies")
peps = Ingredient.create(name: "Peppers", category: "Veggies")
olives = Ingredient.create(name: "Olives", category: "Veggies")
cucs = Ingredient.create(name: "Cucumbers", category: "Veggies")
pics = Ingredient.create(name: "Pickles", category: "Veggies")
mayo = Ingredient.create(name: "Mayo", category: "Condiments")
must = Ingredient.create(name: "Mustard", category: "Condiments")
spicy = Ingredient.create(name: "Spicy Mustard", category: "Condiments")
marin = Ingredient.create(name: "Marinara", category: "Condiments")
oil = Ingredient.create(name: "Oil", category: "Condiments")
vin = Ingredient.create(name: "Vinegar", category: "Condiments")
salt = Ingredient.create(name: "Salt", category: "Condiments")
pep = Ingredient.create(name: "Pepper", category: "Condiments")
pepj = Ingredient.create(name: "Pepper Jack", category: "Cheese")
prov = Ingredient.create(name: "Provolone", category: "Cheese")
ched = Ingredient.create(name: "Cheddar", category: "Cheese")
wched = Ingredient.create(name: "White Cheddar", category: "Cheese")
swiss = Ingredient.create(name: "Swiss", category: "Cheese")

Sandwich.create!([
  {name: "Turkey Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/093938-600x600-A.jpg",
  ingredients: [ white, turkey, prov, lettuce, toms ]},
  {name: "Ultimate Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/093935-600x600-A.jpg",
  ingredients: [ white, turkey, ham, beef, wched, lettuce, toms ]},
  {name: "Veggie Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/093933-600x600-A.jpg",
  ingredients: [ sunflower, prov, lettuce, toms, onions, peps, cucs ]},
  {name: "Ham Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/098723-600x600-A.jpg",
  ingredients: [ white, ham, ched, lettuce, toms ]},
  {name: "Roast Beef Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/098721-600x600-A.jpg",
  ingredients: [ white, beef, prov, lettuce, toms ]},
  {name: "Philly Cheese Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/094994-600x600-A.jpg",
  ingredients: [ white, steak, prov, onions]},
  {name: "Cuban",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/099633-600x600-A.jpg",
  ingredients: [ cuban, ham, pork, swiss, must, pics ]},
  {name: "Chicken Tender Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/90000/090355-600x600-A.jpg",
  ingredients: [ white, chicken, lettuce, toms ]},
  {name: "Meatball Sub",
  photo:"https://cutpcdnwimages.azureedge.net/images/products/95000/097201-600x600-A.jpg",
  ingredients: [ meatballs, prov, marin ]}
  ])
