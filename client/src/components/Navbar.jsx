import React from 'react';
import { Link } from 'react-router';

var NavBar = (props) => {
  return (
    <div>
      <header>
        <nav>
          <Link href='/' >Home</Link>
          <span> | </span>
          <Link href='/about' >About</Link>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
