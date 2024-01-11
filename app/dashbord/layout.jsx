// layouts/MainLayout.js
import React from 'react';
import Link from 'next/link';
import "./Dashboard.css"

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
        <div className='dashboard'>
        <ul className='dashboard-menu'>
            <li>
                <Link href={"/dashbord/crypto"}>CRYPTO LIST</Link>
            </li>
            <li>
                <Link href={"/dashbord/trades"}>TRADES</Link>
            </li>
            <li>
                <Link href={"/dashbord/settings"}>SETTINGS</Link>
            </li>
        </ul>
    </div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
