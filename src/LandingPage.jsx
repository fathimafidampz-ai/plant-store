import React from 'react';
import './LandingPage.css';
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products'); // this pushes /products to URL
  };

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="title">Paradise Nursery</h1>
        <p className="description">
          Welcome to Paradise Nursery – your one-stop destination for lush,
          healthy plants and expert care tips. Whether you’re looking to beautify
          your home, start a garden, or find the perfect gift, our plants bring a
          touch of nature’s serenity to every space.
        </p>
        <button onClick={() => navigate("/products")} className="get-started">Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;



