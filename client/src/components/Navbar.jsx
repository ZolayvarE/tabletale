import React from 'react';
import { Link } from 'react-router';
import formiliar from '../scripts/formiliar';

var NavBar = (props) => {
  return (
    <div className='NavBar'>
      <h1 className='Logo'>
        <Link to='/' onClick={() => {
          formiliar.set('roomName', 'TableTale');
          localStorage.removeItem('roomName');
        }}>
          { formiliar.get('roomName') }
        </Link>
      </h1>
    </div>
  );
};

export default NavBar;







