import { useState } from "react";
import Bento from "../Components/Menu/Bento";
import Ramen from "../Components/Menu/Ramen";
import Sushi from "../Components/Menu/Sushi";
import Drinks from "../Components/Menu/Drinks";
import NavBar from "../Components/NavBar";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const bentoItems = [
    {
      id: 1,
      imageUrl: "/images/katsu-curry.png",
      name: "Pork Katsu Curry Bento",
      description: "A delicious bento box with pork katsu curry, rice, and vegetables.",
      price: 200.00
    },
    {
      id: 2,
      imageUrl: "/images/chicken-teriyaki.png",
      name: "Chicken Teriyaki Bento",
      description: "Tender chicken teriyaki served with rice and vegetables.",
      price: 200.00
    },
    {
      id: 3,
      imageUrl: "/images/sushi-bento.png",
      name: "Sushi Bento",
      description: "A delightful sushi bento box with assorted sushi rolls and sides.",
      price: 200.00
    }
  ];

  const ramenItems = [
    {
      id: 1,
      imageUrl: "/images/shoyu-ramen.png",
      name: "Shoyu Ramen",
      description: "A classic ramen featuring a flavorful soy-based broth",
      price: 150.00
    },
    {
      id: 2,
      imageUrl: "/images/tonkotsu-ramen.png",
      name: "Tonkotsu Ramen",
      description: "A rich and creamy ramen made with a savory pork bone broth",
      price: 150.00
    },
    {
      id: 3,
      imageUrl: "/images/miso-ramen.png",
      name: "Miso Ramen",
      description: "A hearty ramen with a savory miso-based broth",
      price: 150.00
    }
  ];

  const sushiItems = [
    {
      id: 1,
      imageUrl: "/images/salmon-sashimi.png",
      name: "Salmon Sashimi",
      description: "Fresh, thinly sliced salmon served raw, highlighting its rich, buttery texture and delicate flavor",
      price: 280.00
    },
    {
      id: 2,
      imageUrl: "/images/salmon-nigiri.png",
      name: "Salmon Nigiri",
      description: "Succulent slices of fresh salmon delicately draped over a small mound of seasoned sushi rice",
      price: 280.00
    },
    {
      id: 3,
      imageUrl: "/images/california-maki.png",
      name: "California Maki",
      description: "A delicious sushi roll featuring a blend of creamy avocado, sweet crab meat, and crisp cucumber",
      price: 220.00
    }
  ];

  const drinksItems = [
    {
      id: 1,
      imageUrl: "/images/kyoto-milktea.png",
      name: "Kyoto Milk Tea",
      description: "A smooth and creamy milk tea infused with a hint of traditional Japanese flavors",
      price: 120.00
    },
    {
      id: 2,
      imageUrl: "/images/sakurayu.png",
      name: "Sakurayu",
      description: "A delicate and aromatic Japanese tea made from dried cherry blossoms",
      price: 120.00
    },
    {
      id: 3,
      imageUrl: "/images/black-coffee.png",
      name: "Black Coffee",
      description: "A robust and full-bodied coffee brewed without milk or sugar, showcasing rich and bold flavors",
      price: 80.00
    }
  ];

  // Similar data can be added for other categories

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-16">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`btn ${selectedCategory === "All" ? "bg-gray-800 text-white" : "bg-gray-400 text-gray-800"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`btn ${selectedCategory === "Bento" ? "bg-gray-800 text-white" : "bg-gray-400 text-gray-800"}`}
            onClick={() => setSelectedCategory("Bento")}
          >
            Bento
          </button>
          <button
            className={`btn ${selectedCategory === "Ramen" ? "bg-gray-800 text-white" : "bg-gray-400 text-gray-800"}`}
            onClick={() => setSelectedCategory("Ramen")}
          >
            Ramen
          </button>
          <button
            className={`btn ${selectedCategory === "Sushi" ? "bg-gray-800 text-white" : "bg-gray-400 text-gray-800"}`}
            onClick={() => setSelectedCategory("Sushi")}
          >
            Maki and Sushi
          </button>
          <button
            className={`btn ${selectedCategory === "Drinks" ? "bg-gray-800 text-white" : "bg-gray-400 text-gray-800"}`}
            onClick={() => setSelectedCategory("Drinks")}
          >
            Drinks
          </button>
        </div>
        {selectedCategory === "All" && (
          <>
            <Bento items={bentoItems} />
            <Ramen items={ramenItems} />
            <Sushi items={sushiItems} />
            <Drinks items={drinksItems} />
          </>
        )}
        {selectedCategory === "Bento" && <Bento items={bentoItems} />}
        {selectedCategory === "Ramen" && <Ramen items={ramenItems} />}
        {selectedCategory === "Sushi" && <Sushi items={sushiItems} />}
        {selectedCategory === "Drinks" && <Drinks items={drinksItems} />}
      </div>
    </>
  );
}

export default Menu;
