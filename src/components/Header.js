import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='header__logo'>
        Streamy
      </Link>
      <div className='header__rightMenu'>
        <Link to='/' className='header__button'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
