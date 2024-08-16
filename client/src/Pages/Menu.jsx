import { useState, useEffect } from "react";
import axios from "axios";
import Bento from "../Components/Menu/Bento";
import Ramen from "../Components/Menu/Ramen";
import Sushi from "../Components/Menu/Sushi";
import Drinks from "../Components/Menu/Drinks";
import NavBar from "../Components/NavBar";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch menu items from the backend API
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/menu-items");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error.response?.data || error.message);
        setError("Failed to load menu items.");
      }
    };

    fetchMenuItems();
  }, []);

  // Filter items based on the selected category
  const filteredItems = (category) => menuItems.filter(item => category === "All" || item.category === category);

  const bentoItems = filteredItems("Bento");
  const ramenItems = filteredItems("Ramen");
  const sushiItems = filteredItems("Sushi");
  const drinksItems = filteredItems("Drinks");

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
        {error && <p className="text-red-500 text-center">{error}</p>}
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
