import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', height: '100vh' }}>
    {/* Sidebar */}
    <aside style={{ width: '200px', background: '#f5f5f5', padding: '20px' }}>
      <h3>Smart Delivery</h3>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/partners">Partners</Link></li>
          <li><Link href="/partners/new">Add Partner</Link></li>
          <li><Link href="/orders">Orders</Link></li>
          <li><Link href="/orders/new">Add Order</Link></li>
          <li><Link href="/assignments">Assignments</Link></li>
          <li><Link href="/assignments/run">Run Algorithm</Link></li>
        </ul>
      </nav>
    </aside>

    {/* Main Content */}
    <main style={{ flex: 1, padding: '20px' }}>
      {children}
    </main>
  </div>
);

export default Layout;
