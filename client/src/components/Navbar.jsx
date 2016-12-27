import React from 'react';
import { Link } from 'react-router';
import formiliar from '../scripts/formiliar';

var NavBar = (props) => {
  return (
    <div className='NavBar'>
      <h1 className='Logo'><Link to='/' >{ formiliar.get('title') }</Link></h1>
    </div>
  );
};

export default formiliar(NavBar, ['title']);







