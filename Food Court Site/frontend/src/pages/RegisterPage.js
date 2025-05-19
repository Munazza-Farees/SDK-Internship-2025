import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    role: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    // Here you would send a POST request to backend
    alert('Account created! (Demo only)');
    navigate('/menu');
  };

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

      {/* Registration Form */}
      <section style={{background: '#fafafa', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0'}}>
        <form className="fc-register-form" onSubmit={handleSubmit} style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2.5rem 2rem', maxWidth: 370, width: '100%'}}>
          <h2 style={{textAlign: 'center', marginBottom: 24}}>Create an Account</h2>
          <div style={{marginBottom: 12}}>
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full Name" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
          </div>
          <div style={{marginBottom: 12}}>
            <input name="age" value={form.age} onChange={handleChange} type="number" placeholder="Age" min="1" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
          </div>
          <div style={{marginBottom: 12}}>
            <select name="role" value={form.role} onChange={handleChange} required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}}>
              <option value="">Role (Customer/Manager)</option>
              <option value="customer">Customer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div style={{marginBottom: 12}}>
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
          </div>
          <div style={{marginBottom: 12}}>
            <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
          </div>
          <div style={{marginBottom: 12}}>
            <input name="confirm" value={form.confirm} onChange={handleChange} type="password" placeholder="Confirm Password" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
          </div>
          {error && <div style={{color: 'red', marginBottom: 12, textAlign: 'center'}}>{error}</div>}
          <button className="fc-btn" type="submit" style={{width: '100%', marginTop: 8}}>Create Account</button>
        </form>
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

export default RegisterPage; 