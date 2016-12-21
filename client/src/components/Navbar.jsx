import React from 'react';
import { Link } from 'react-router';

var NavBar = (props) => {
  return (
    <div className='NavBar'>
      <Link to='/' ><h1 className='Logo'>Tabletale</h1></Link>
    </div>
  );
};

export default NavBar;
