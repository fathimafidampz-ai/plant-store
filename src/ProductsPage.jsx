import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ProductsPage() {
  const navigate = useNavigate();

  // cart state (read from localStorage initially)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // add to cart function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // count items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // product data
  const products = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 45, image: 'https://media.istockphoto.com/id/1393839291/photo/green-leaves-tropical-houseplant-fiddle-leaf-fig-tree-in-small-ceramic-pot-ornamental-tree.jpg?s=612x612&w=0&k=20&c=NVaXl-oFHnMlu9FQVBEcrYNPo-W8RPH-tn__HFXwRLY=' },
    { id: 2, name: 'Snake Plant', price: 30, image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691783768-61p6vBt1QaL.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    { id: 3, name: 'Monstera Deliciosa', price: 50, image: 'https://media.istockphoto.com/id/1278906674/photo/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-leaves-or-houseplant-that.jpg?s=612x612&w=0&k=20&c=_s8SHj6gP3oA0zx4jH2SvRJGvcLMnnHwMY_FvANDFiU=' },
    { id: 4, name: 'Peace Lily', price: 25, image: 'https://cdn.shopify.com/s/files/1/0745/4412/0085/files/Peacelilly_deluxe_square.png?v=1757510691' },
    { id: 5, name: 'Spider Plant', price: 20, image: 'https://dukaan.b-cdn.net/700x700/webp/730950/570a0a01-8039-4174-b518-9bf54edfe5fb/spider-white-green-onlineplantscart-58303c25-4fe1-4797-a73e-647bfb9b19ab.jpg' },
    { id: 6, name: 'Rubber Plant', price: 40, image: 'https://5.imimg.com/data5/ECOM/Default/2023/2/QW/ZT/KC/32717023/rubber-tree-grow-pot-extra-large-920x920-f679089b-cacd-433b-b9a4-2c3d2603af71-500x500.webp' },
    { id: 7, name: 'Aloe Vera', price: 15, image: 'https://rocketfarms.com/wp-content/uploads/Aloe-Vera-1.webp' },
    { id: 8, name: 'Boston Fern', price: 35, image: 'https://mygreenleaf.ae/wp-content/uploads/2024/01/Boston-Fern-Nephrolepis-exaltata.jpg' },
    { id: 9, name: 'Jade Plant', price: 28, image: 'https://thumbs.dreamstime.com/b/jade-plant-pot-isolated-white-background-jade-plant-pot-isolated-clear-white-background-286045793.jpg' },
    { id: 10, name: 'ZZ Plant', price: 38, image: 'https://i.pinimg.com/564x/2e/41/6f/2e416f9ac912f14f4f8f581bf3264f06.jpg' },
    { id: 11, name: 'Chinese Evergreen', price: 32, image: 'https://d2eygrc92dqrgg.cloudfront.net/wp-content/uploads/2021/09/21055546/CE_JubileeTT.png' },
    { id: 12, name: 'Dracaena Marginata', price: 42, image: 'https://www.ikea.com/ca/en/images/products/dracaena-marginata-potted-plant-dragon-tree-1-stem__1473790_pe997858_s5.jpg?f=s' },
  ];

  return (
    <div className="full-page">
      <nav className="navbar">
        <div className="logo-block">
          <h1 className="page-title">Paradise Nursery <span>Plants</span></h1>
          <p className="slogan">Your Gateway to Green Living.</p>
        </div>
        

        <div className="cart-icon-wrapper" onClick={() => navigate('/cart')}>
          <FontAwesomeIcon icon={faCartShopping} className="fa-cart-shopping" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </nav>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button
              className="cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
