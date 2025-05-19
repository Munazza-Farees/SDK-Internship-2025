import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// Placeholder images
const heroImage = 'https://via.placeholder.com/400x300?text=Food+Image';

function HomePage() {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch menu items from backend
    fetch('/api/menu/')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="fc-root">
      {/* Header */}
      <header className="fc-header">
        <div className="fc-logo">FoodCourt</div>
        <nav className="fc-nav">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="fc-header-actions">
          <button className="fc-btn fc-btn-outline" onClick={() => navigate("/login")}>Login</button>
          <button className="fc-btn" onClick={() => navigate('/register')}>Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="fc-hero d-flex">
        <div className="fc-hero-content">
          <span className="fc-badge">Online Food Court</span>
          <h1>Order & Manage<br />Food Court Menu</h1>
          <p>Easily browse menus, place orders, and track status in real-time. Perfect for both customers and food court managers.</p>
          <div className="fc-hero-actions">
            <button className="fc-btn" onClick={() => navigate("/menu")}>Browse Menu</button>
            <button className="fc-btn fc-btn-outline">Manager Login</button>
          </div>
        </div>
        <div className="fc-hero-image">
          <img src={heroImage} alt="Food" />
          <div className="fc-order-confirmed">
            <span className="fc-order-dot" /> Order Confirmed
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="fc-featured">
        <div className="fc-section-title">
          <h2>Featured Menu Items</h2>
          <p>Discover the most popular items from our food court vendors, freshly prepared and ready to order.</p>
        </div>
        <div className="fc-menu-carousel">
          {loading ? (
            <div>Loading menu...</div>
          ) : (
            <div className="fc-menu-list">
              {menuItems.slice(0, 4).map((item, idx) => (
                <div className="fc-menu-card" key={item.id || idx}>
                  <div className="fc-menu-card-badge">{item.category || 'Food'}</div>
                  <div className="fc-menu-card-title-row">
                    <h3>{item.name}</h3>
                    <span className="fc-menu-card-price">${item.price}</span>
                  </div>
                  <p className="fc-menu-card-desc">{item.description}</p>
                  <div className="fc-menu-card-rating">
                    <span>★ {item.rating || '4.5'}</span>
                  </div>
                  <button className="fc-btn fc-btn-small">Add to Cart</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Platform Features */}
      <section className="fc-features">
        <h2>Simplifying Food Court Experience</h2>
        <p>Our platform brings together customers and food court managers, making ordering and managing food court operations seamless and efficient.</p>
        <div className="fc-features-list">
          <div className="fc-feature-item">
            <div className="fc-feature-icon">🍽️</div>
            <h4>Browse Menus Easily</h4>
            <p>Explore menus from all food court vendors in one place, with detailed descriptions and images.</p>
          </div>
          <div className="fc-feature-item">
            <div className="fc-feature-icon">🛒</div>
            <h4>Order With Confidence</h4>
            <p>Place orders quickly and securely with customization options and special requests.</p>
          </div>
          <div className="fc-feature-item">
            <div className="fc-feature-icon">⏱️</div>
            <h4>Real-Time Tracking</h4>
            <p>Monitor your order status in real-time from preparation to ready-for-pickup notification.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fc-footer">
        <div className="fc-footer-main">
          <div className="fc-footer-brand">
            <div className="fc-logo">FoodCourt</div>
            <p>The modern solution for food court management and ordering, connecting both customers and vendors in one seamless platform.</p>
          </div>
          <div className="fc-footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Manager Portal</a></li>
            </ul>
          </div>
          <div className="fc-footer-subscribe">
            <h5>Subscribe</h5>
            <form className="fc-subscribe-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button className="fc-btn fc-btn-small" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="fc-footer-bottom">
          <span>© 2025 FoodCourt App. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage; 