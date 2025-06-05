const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to My Hotel ... How i can help you ! ");
});

app.get("/chicken", (req, res) => {
  res.send("Sure Sir");
});

app.get("/gravy", (req, res) => {
  res.send("Sure Sir ji");
});

app.get("/menu", (req, res) => {
  const foodItems = [
    {
      name: "Margherita Pizza",
      price: 8.99,
      variations: ["Small", "Medium", "Large", "Extra Cheese"],
    },
    {
      name: "Veggie Burger",
      price: 6.49,
      variations: ["Single Patty", "Double Patty", "Gluten-Free Bun"],
    },
    {
      name: "Chicken Biryani",
      price: 10.99,
      variations: ["Regular", "Spicy", "Extra Chicken"],
    },
    {
      name: "Caesar Salad",
      price: 5.99,
      variations: ["Grilled Chicken", "Tofu", "No Croutons"],
    },
    {
      name: "Beef Taco",
      price: 3.99,
      variations: ["Soft Shell", "Hard Shell", "Extra Cheese"],
    },
    {
      name: "Pasta Alfredo",
      price: 9.49,
      variations: ["Mushroom", "Chicken", "Bacon"],
    },
    {
      name: "Sushi Roll",
      price: 12.99,
      variations: ["Tuna", "Salmon", "Avocado", "Spicy Mayo"],
    },
    {
      name: "Ice Cream Sundae",
      price: 4.99,
      variations: ["Chocolate", "Vanilla", "Strawberry", "Sprinkles"],
    },
    {
      name: "Pancakes",
      price: 7.49,
      variations: ["Maple Syrup", "Blueberry", "Chocolate Chip"],
    },
    {
      name: "Grilled Sandwich",
      price: 6.99,
      variations: ["Cheese", "Ham & Cheese", "Tomato & Basil"],
    },
  ];

  res.send(foodItems);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
}); // localhost me haamre application ke liye ek room number allot hua hai
