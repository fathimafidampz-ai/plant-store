import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const navigate = useNavigate();

  // load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // increase quantity
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease quantity
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // remove item from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
 const handleCheckout = () => {
    if(cart.length === 0){
      alert("Your cart is empty!");
      return;
    }
    alert(`Proceeding to checkout. Total: $${totalPrice}`);
    // you can later navigate to a checkout page if you have one
    // navigate('/checkout');
  };

  // handle continue shopping
  const handleContinueShopping = () => {
    navigate('/products'); // redirect to product listing page
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ⬅ Back to Products
        </button>
        <h1>Your Cart</h1>
      </div>

      <h2 className="total-price">Total Price: ${totalPrice}</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button
                  className="delete-button"
                  onClick={() => removeItem(item.id)}
                >
                  Delete
                </button>    
              </div>
          </div>
          ))}
       
        <div className="cart-actions">
          <button className='checkout-button' onClick={handleCheckout}>
            Checkout
          </button>
          <button className='continue-button' onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      
      </div>
      )}
    </div>
  );
}

export default CartPage;
