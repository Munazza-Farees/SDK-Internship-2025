import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: form.username, password: form.password }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch {
      setError('Login failed');
    }
  };

  return (
    <div className="fc-root">
      <header className="fc-header">
        <div className="fc-logo">FoodCourt</div>
        <nav className="fc-nav">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section style={{background: '#ededed', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0'}}>
        <form onSubmit={handleSubmit} style={{background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2.5rem 2rem', maxWidth: 400, width: '100%'}}>
          <h2 style={{textAlign: 'center', marginBottom: 8}}>Welcome Back</h2>
          <div style={{textAlign: 'center', color: '#666', marginBottom: 24}}>Log in to your FoodCourt account</div>
          <div style={{marginBottom: 12}}>
            <label style={{fontWeight: 500, fontSize: 14}}>Email or Phone Number</label>
            <input name="username" value={form.username} onChange={handleChange} type="text" placeholder="Email or phone number" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
          </div>
          <div style={{marginBottom: 12}}>
            <label style={{fontWeight: 500, fontSize: 14}}>Password</label>
            <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" required style={{width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb'}} />
            <div style={{float: 'right', fontSize: 12, marginTop: 2, color: '#666'}}>Forgot password?</div>
          </div>
          {error && <div style={{color: 'red', marginBottom: 12, textAlign: 'center'}}>{error}</div>}
          <button className="fc-btn" type="submit" style={{width: '100%', marginTop: 8}}>Log in</button>
          <div style={{textAlign: 'center', marginTop: 16, fontSize: 14}}>
            Don't have an account? <span style={{color: '#18181b', fontWeight: 600, cursor: 'pointer'}} onClick={() => navigate('/register')}>Create account</span>
          </div>
        </form>
      </section>
      {/* Footer (reuse your existing footer code) */}
    </div>
  );
}

export default LoginPage;
