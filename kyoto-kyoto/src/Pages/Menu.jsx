import { useState } from "react";
import Bento from "../Components/Menu/Bento";
import Ramen from "../Components/Menu/Ramen";
import Sushi from "../Components/Menu/Sushi";
import Drinks from "../Components/Menu/Drinks";
import NavBar from "../Components/NavBar";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
            Sushi
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
            <Bento />
            <Ramen />
            <Sushi />
            <Drinks />
          </>
        )}
        {selectedCategory === "Bento" && <Bento />}
        {selectedCategory === "Ramen" && <Ramen />}
        {selectedCategory === "Sushi" && <Sushi />}
        {selectedCategory === "Drinks" && <Drinks />}
      </div>
    </>
  );
}

export default Menu;
