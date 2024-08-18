  import { useState } from "react";
  import Bento from "../Components/Menu/Bento";
  import Ramen from "../Components/Menu/Ramen";
  import Sushi from "../Components/Menu/Sushi";
  import Drinks from "../Components/Menu/Drinks";
  import NavBar from "../Components/NavBar";
  import Modal from "../Components/Cart/Modal";
  
  function Menu() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false); // State to control modal visibility
  
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
 
    // Add to cart and open the modal
    const addToCart = (item) => {
      setCart(prevCart => {
        const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex].quantity += 1;
          return updatedCart;
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
      setIsCartOpen(true); // Open the cart modal after adding the item
    };
  
    const removeFromCart = (itemId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };
  
    const checkout = async () => {
      const order = {
        customerId: 1,
        status: 'pending',
        totalAmount: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        items: cart.map(item => ({
          menuItemId: item.id,
          quantity: item.quantity,
          price: item.price
        }))
      };
  
      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order)
        });
  
        if (response.ok) {
          alert("Order placed successfully!");
          setCart([]);
          setIsCartOpen(false); // Close the modal after checkout
        } else {
          alert("Failed to place order.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while placing the order.");
      }
    };
  
    return (
      <>
        <NavBar />
        <div className="container mx-auto mt-16">
          {/* Category buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            {/* Your category buttons */}
          </div>
  
          {/* Render items based on selected category */}
          {selectedCategory === "All" && (
            <>
              <Bento items={bentoItems} onAddToCart={addToCart} />
              <Ramen items={ramenItems} onAddToCart={addToCart}/>
              <Sushi items={sushiItems} onAddToCart={addToCart}/>
              <Drinks items={drinksItems} onAddToCart={addToCart}/>
            </>
          )}
          {selectedCategory === "Bento" && <Bento items={bentoItems} onAddToCart={addToCart}/>}
          {selectedCategory === "Ramen" && <Ramen items={ramenItems} onAddToCart={addToCart}/>}
          {selectedCategory === "Sushi" && <Sushi items={sushiItems} onAddToCart={addToCart}/>}
          {selectedCategory === "Drinks" && <Drinks items={drinksItems} onAddToCart={addToCart} />}
          
          {/* Open Cart Button */}
          <div className="fixed bottom-4 right-4">
            <button
              className="btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setIsCartOpen(true)}
            >
              View Cart ({cart.length})
            </button>
          </div>
  
          {/* Cart Modal */}
          <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <h2 className="text-2xl font-semibold mb-4">Cart</h2>
            <ul className="list-none p-0">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.quantity} x PHP {item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            {cart.length > 0 && (
              <button
                className="btn bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                onClick={checkout}
              >
                Checkout
              </button>
            )}
          </Modal>
        </div>
      </>
    );
  }
  
  export default Menu;
  

  
