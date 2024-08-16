import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });
  const [error, setError] = useState("");

  // Fetch menu items on component mount
  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await axios.get("http://localhost:3001/api/menu");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error.response?.data || error.message);
        setError(error.response?.data?.error || "An error occurred while fetching menu items");
      }
    }
    fetchMenuItems();
  }, []);

  // Handle new menu item input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMenuItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  // Handle adding a new menu item
  const handleAddMenuItem = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/menu", newMenuItem);
      setMenuItems((prevItems) => [...prevItems, response.data]);
      setNewMenuItem({
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error adding menu item:", error.response?.data || error.message);
      setError(error.response?.data?.error || "An error occurred while adding the menu item");
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Menu</h1>
        {error && <p className="text-red-500">{error}</p>}

        {/* Form for adding new menu items */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
          <form onSubmit={handleAddMenuItem} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter item name"
                className="input input-bordered w-full"
                value={newMenuItem.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter item description"
                className="input input-bordered w-full"
                value={newMenuItem.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter item price"
                className="input input-bordered w-full"
                value={newMenuItem.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter item category"
                className="input input-bordered w-full"
                value={newMenuItem.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter item image URL"
                className="input input-bordered w-full"
                value={newMenuItem.imageUrl}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" style={{ backgroundColor: "#D84044" }}>
              Add Menu Item
            </button>
          </form>
        </div>

        {/* Display menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 capitalize">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
