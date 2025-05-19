import React, { useEffect, useState } from 'react';
import './HomePage.css';

function DashboardPage() {
  const [user, setUser] = useState({ name: 'John Doe' }); // Replace with real user fetch
  const [order, setOrder] = useState({
    items: [
      { name: 'Chicken Burger', qty: 1, price: 8.99 },
      { name: 'French Fries', qty: 1, price: 3.49 }
    ],
    subtotal: 12.48,
    tax: 1.00,
    total: 13.48
  });
  const [featured, setFeatured] = useState([
    { name: 'Classic Cheeseburger', price: 8.99, desc: 'Beef patty with cheese, lettuce, tomato and special sauce', category: 'Burger' },
    { name: 'Margherita Pizza', price: 12.99, desc: 'Classic pizza with tomato sauce, mozzarella, and basil', category: 'Pizza' },
    { name: 'Caesar Salad', price: 7.99, desc: 'Romaine lettuce with Caesar dressing, croutons and parmesan', category: 'Salad' }
  ]);

  // TODO: Fetch real user, order, and menu data from backend using JWT

  return (
    <div className="fc-root">
      <header className="fc-header">
        <div className="fc-logo">FoodCourt</div>
        <nav className="fc-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/menu">Menu</a>
          <a href="#">My Orders</a>
        </nav>
        <div className="fc-header-actions">
          <span style={{marginRight: 16}}><i className="fa fa-bell"></i></span>
          <span style={{marginRight: 16}}><i className="fa fa-user"></i></span>
          <button className="fc-btn fc-btn-outline">Logout</button>
        </div>
      </header>
      <section style={{background: '#f4f4f5', minHeight: '70vh', padding: '2rem 0'}}>
        <div style={{display: 'flex', gap: 24, maxWidth: 1200, margin: '0 auto', flexWrap: 'wrap'}}>
          {/* Sidebar */}
          <div style={{flex: '1 1 260px', minWidth: 260, maxWidth: 320, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
            <div style={{marginBottom: 24}}>
              <div style={{fontWeight: 600, fontSize: 18, marginBottom: 4}}>Welcome back!</div>
              <div style={{color: '#666'}}>{user.name}</div>
            </div>
            <button className="fc-btn fc-btn-small" style={{width: '100%', marginBottom: 8}}>My Profile</button>
            <button className="fc-btn fc-btn-small" style={{width: '100%', marginBottom: 8}}>My Orders</button>
            <button className="fc-btn fc-btn-small" style={{width: '100%'}}>Notifications</button>
            <div style={{margin: '24px 0', borderTop: '1px solid #eee'}}></div>
            <div style={{fontWeight: 600, marginBottom: 8}}>Current Order <span style={{color: '#666', fontWeight: 400}}>{order.items.length} items</span></div>
            {order.items.map((item, idx) => (
              <div key={idx} style={{display: 'flex', justifyContent: 'space-between', marginBottom: 4}}>
                <span>{item.name} x{item.qty}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div style={{margin: '12px 0 0 0', fontSize: 14}}>
              <div>Subtotal: <span style={{float: 'right'}}>${order.subtotal.toFixed(2)}</span></div>
              <div>Tax: <span style={{float: 'right'}}>${order.tax.toFixed(2)}</span></div>
              <div style={{fontWeight: 600}}>Total: <span style={{float: 'right'}}>${order.total.toFixed(2)}</span></div>
            </div>
            <button className="fc-btn" style={{width: '100%', marginTop: 16}}>Checkout</button>
          </div>
          {/* Main Content */}
          <div style={{flex: '3 1 500px', minWidth: 320, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
            <div style={{marginBottom: 24}}>
              <div style={{fontWeight: 600, fontSize: 18, marginBottom: 12}}>Browse Menu</div>
              <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24}}>
                {['Burgers','Pizza','Salads','Sides','Drinks','Desserts'].map((cat, idx) => (
                  <div key={cat} style={{background: '#f3f4f6', borderRadius: 8, padding: '12px 18px', fontWeight: 500, minWidth: 90, textAlign: 'center'}}>
                    {cat} <div style={{fontSize: 12, color: '#666'}}>{Math.floor(Math.random()*15)+5} Items</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{fontWeight: 600, fontSize: 16, marginBottom: 12}}>Featured Items</div>
              {featured.map((item, idx) => (
                <div key={idx} style={{display: 'flex', alignItems: 'center', background: '#f9fafb', borderRadius: 8, padding: 16, marginBottom: 12}}>
                  <div style={{background: idx===0?'#fde68a':idx===1?'#fca5a5':'#bbf7d0', color: '#18181b', borderRadius: 6, padding: '4px 12px', fontWeight: 600, marginRight: 16, minWidth: 60, textAlign: 'center'}}>{item.category}</div>
                  <div style={{flex: 1}}>
                    <div style={{fontWeight: 600}}>{item.name}</div>
                    <div style={{color: '#666', fontSize: 14}}>{item.desc}</div>
                  </div>
                  <div style={{fontWeight: 600, marginRight: 16}}>${item.price.toFixed(2)}</div>
                  <button className="fc-btn fc-btn-small">Add</button>
                </div>
              ))}
              <button className="fc-btn fc-btn-outline" style={{width: '100%', marginTop: 12}}>View Full Menu</button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer (reuse your existing footer code) */}
    </div>
  );
}

export default DashboardPage;
