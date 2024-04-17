import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import { useHeaderStyles } from './header.style';

const HeaderComponent = () => {
  const classes = useHeaderStyles();
 
  return (
    <div className={classes.header}>
      <div className='row'>
        <div className='col-12 p-0'>
          <div className={classes.mobileHeader}>
            <Link to='#' className={classes.mobileMenuIcon} >
              <FaBars />
            </Link>
          </div>
          <HeaderNavbarComponent  />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
