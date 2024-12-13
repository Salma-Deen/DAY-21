import Header from "./Components/Header.jsx"
import ShopInStyle from "./Components/ShopInStyle"
import Card from "./Components/Products.jsx"
import Footer from "./Components/Footer.jsx"
import jsonData from "./Components/Products.json"
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]); // State for cart items

  // Add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  // Check if an item is in the cart
  const isInCart = (product) => cart.some((item) => item.id === product.id);


  return (
    <>
      <Header cart={cart.length} />
      <ShopInStyle />
      <Card
        products={jsonData}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        isInCart={isInCart}
      />
      <Footer />
    </>
  )
}
export default App;