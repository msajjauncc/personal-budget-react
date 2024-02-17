import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div 
        className="menu"
        role="navigation"
        aria-label="Main menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
            >
        <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="about" itemProp="url">About</Link></li>
            <li><Link to="login" itemProp="url">Login</Link></li>
        </ul>
    </div>
  );
}

export default Menu;
