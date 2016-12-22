import React from 'react';
import { Link } from 'react-router';

var NavBar = (props) => {
  return (
    <div className='NavBar'>
      <h1 className='Logo'><Link to='/' >Tabletale</Link></h1>
    </div>
  );
};

export default NavBar;
