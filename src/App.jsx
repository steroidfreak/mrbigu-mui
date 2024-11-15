import React from 'react';
import Navbar from './Navbar';
import FastingInfo from './FastingInfo';
import FoodAccordion from './FoodAccordion';
import { Container, Box } from '@mui/material';

function App() {
  // Sample data for Accordion
  const foodItems = [
    {
      name: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      name: "Chicken Caesar Salad",
      description: "A fresh and healthy salad made with crispy chicken, romaine lettuce, parmesan, and Caesar dressing.",
    },
    {
      name: "Beef Tacos",
      description: "Tasty beef tacos topped with fresh salsa, guacamole, and sour cream.",
    },
    {
      name: "Vegetable Stir Fry",
      description: "A vibrant dish made with stir-fried vegetables in a savory soy sauce.",
    },
  ];

  const fruits = [
    {
      name: "Apple",
      description: "A sweet and crunchy fruit, often red, green, or yellow in color.",
    },
    {
      name: "Banana",
      description: "A soft, sweet, and tropical fruit with a yellow peel when ripe.",
    },
    {
      name: "Strawberry",
      description: "A juicy and sweet red fruit with small seeds on the surface.",
    },
    {
      name: "Mango",
      description: "A tropical fruit with a rich and sweet flavor, often eaten fresh or used in smoothies.",
    },
  ];


  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <FastingInfo />
        <FoodAccordion title="Vegetables" items={foodItems} />
        <FoodAccordion title="Fruits" items={fruits} />
      </Container>
    </Box>
  );
}

export default App;