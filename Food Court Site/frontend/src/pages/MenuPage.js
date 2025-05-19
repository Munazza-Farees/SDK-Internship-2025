import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const placeholderImages = [
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
];

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/menu/')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Simulate not logged in
  const isLoggedIn = false;

  return (
    <div className="fc-root">
      {/* Header */}
      <header className="fc-header">
        <div className="fc-logo">FoodCourt</div>
        <nav className="fc-nav">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="fc-header-actions">
          <button className="fc-btn fc-btn-outline" onClick={() => navigate('/register')}>Login</button>
          <button className="fc-btn" onClick={() => navigate('/register')}>Signup</button>
        </div>
      </header>

      {/* Menu Highlights */}
      <section className="fc-featured" style={{background: '#fafafa'}}>
        <div className="fc-section-title">
          <h2>Our Menu Highlights</h2>
          <p>Explore our delicious menu, freshly prepared and available for order.</p>
        </div>
        <div className="fc-menu-carousel">
          {loading ? (
            <div>Loading menu...</div>
          ) : (
            <div className="fc-menu-list" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
              {menuItems.slice(0, 9).map((item, idx) => (
                <div className="fc-menu-card" key={item.id || idx}>
                  <img src={item.image || placeholderImages[idx % placeholderImages.length]} alt={item.name} style={{width: '100%', borderRadius: '1rem', marginBottom: '1rem', objectFit: 'cover', height: '160px'}} />
                  <div className="fc-menu-card-badge">{item.category || 'Food'}</div>
                  <div className="fc-menu-card-title-row">
                    <h3>{item.name}</h3>
                    <span className="fc-menu-card-price">${item.price}</span>
                  </div>
                  <p className="fc-menu-card-desc">{item.description}</p>
                  <div className="fc-menu-card-rating">
                    <span>★ {item.rating || '4.5'}</span>
                  </div>
                  <button
                    className="fc-btn fc-btn-small"
                    style={{width: '100%', opacity: isLoggedIn ? 1 : 0.7, cursor: 'pointer'}}
                    onClick={() => { if (!isLoggedIn) navigate('/register'); }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="fc-features" style={{background: '#f4f4f5'}}>
        <h2>Why Choose Our Platform</h2>
        <p>Enjoy an outstanding, efficient, and personalized food court experience designed just for you.</p>
        <div className="fc-features-list">
          <div className="fc-feature-item">
            <div className="fc-feature-icon">⚡</div>
            <h4>Quick & Easy Ordering</h4>
            <p>Order your favorite meals in just a few clicks, with real-time updates.</p>
          </div>
          <div className="fc-feature-item">
            <div className="fc-feature-icon">⭐</div>
            <h4>Top-Rated Vendors</h4>
            <p>Choose from a curated selection of the best food court vendors.</p>
          </div>
          <div className="fc-feature-item">
            <div className="fc-feature-icon">📝</div>
            <h4>Personalized Experience</h4>
            <p>Save your favorites, track orders, and get personalized offers.</p>
          </div>
        </div>
        <div style={{background: '#e5e7eb', borderRadius: '1rem', padding: '1.5rem', margin: '2rem auto 0 auto', maxWidth: 700, color: '#18181b', fontSize: '1.05rem'}}>
          <strong>Innovative at Your Fingertips:</strong>
          <ul style={{margin: '1rem 0 0 1.2rem', padding: 0, color: '#52525b'}}>
            <li>Order from multiple vendors in a single checkout.</li>
            <li>Track your order status in real-time.</li>
            <li>Enjoy exclusive deals and seasonal offers.</li>
            <li>Contactless payment and pickup options available.</li>
          </ul>
        </div>
      </section>

      {/* Special Offers */}
      <section className="fc-featured" style={{background: '#fff'}}>
        <div className="fc-section-title">
          <h2>Special Offers</h2>
          <p>Save big! Find special deals and discounts available for a limited time.</p>
        </div>
        <div className="fc-features-list" style={{justifyContent: 'center'}}>
          <div className="fc-feature-item" style={{maxWidth: 260}}>
            <div className="fc-feature-icon">🎁</div>
            <h4>First Order 10% Off</h4>
            <p>Sign up and get 10% off your first order!</p>
          </div>
          <div className="fc-feature-item" style={{maxWidth: 260}}>
            <div className="fc-feature-icon">🍕</div>
            <h4>Lunch Super Deals</h4>
            <p>Enjoy special lunch combos at discounted prices.</p>
          </div>
          <div className="fc-feature-item" style={{maxWidth: 260}}>
            <div className="fc-feature-icon">🥤</div>
            <h4>Wednesday Drink Day</h4>
            <p>Free drink with every main course on Wednesdays.</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="fc-featured" style={{background: '#fafafa', paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', maxWidth: 1000, margin: '0 auto'}}>
          <div style={{flex: '1 1 260px', minWidth: 220}}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@foodcourt.com">info@foodcourt.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
            <p>Follow us on social media</p>
          </div>
          <div style={{flex: '1 1 320px', minWidth: 220}}>
            <h4>Send us a message</h4>
            <form onSubmit={e => {e.preventDefault(); alert('Message sent!')}}>
              <input type="text" placeholder="Your Name" required style={{width: '100%', marginBottom: 8, padding: 8, borderRadius: 6, border: '1px solid #e5e7eb'}} />
              <input type="email" placeholder="Your Email" required style={{width: '100%', marginBottom: 8, padding: 8, borderRadius: 6, border: '1px solid #e5e7eb'}} />
              <textarea placeholder="Message" required style={{width: '100%', marginBottom: 8, padding: 8, borderRadius: 6, border: '1px solid #e5e7eb', minHeight: 60}} />
              <button className="fc-btn fc-btn-small" type="submit" style={{width: '100%'}}>Send Message</button>
            </form>
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
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
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

export default MenuPage; 