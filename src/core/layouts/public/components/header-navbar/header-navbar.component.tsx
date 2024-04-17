import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'router/routes';
import { useHeaderNavbarStyles } from './header-navbar.style';
import MenuComponent from '../menu/menu.component';
import { Logo } from 'assets/images/icons/logo';

interface HeaderNavbarProps {
  isMobileMenuOpen: boolean;
}
const HeaderNavbarComponent: React.FC<HeaderNavbarProps> = ({ isMobileMenuOpen }) => {
  const classes = useHeaderNavbarStyles();
  return (
    <div className={classes.headerNavbar}>
      <div className='col-4'>
        <div className={classes.logoContainer}>
          <NavLink to={Routes.home}>
            <Logo />
          </NavLink>
        </div>
      </div>
      <div className='col-8'>
        <MenuComponent isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </div>
  );
};

export default HeaderNavbarComponent;
