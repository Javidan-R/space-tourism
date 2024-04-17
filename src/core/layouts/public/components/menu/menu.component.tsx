// MenuComponent.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'router/routes';
import useMenuStyles from '../menu-item/menu-item.style';

interface MenuComponentProps {
  isMobileMenuOpen?: boolean;
  isFooter?: boolean; 
}

const MenuComponent: React.FC<MenuComponentProps> = ({ isMobileMenuOpen, isFooter = false }) => {
  const classes = useMenuStyles();  

  const items = [
    { id: 1, name: 'Ana Səhifə', link: Routes.home },
    { id: 2, name: 'Haqqımızda', link: Routes.about },
    { id: 3, name: 'Məhsullar', link: Routes.products },
    { id: 4, name: 'Partnyorlar', link: Routes.partners },
    { id: 5, name: 'Əlaqə', link: Routes.contact },
  ];
  const menuContainerClass = isFooter ? classes.footerMenu : (isMobileMenuOpen ? classes.open : classes.headerMenu);
  return (
    <div className={menuContainerClass}>
      {items.map(({ id, name, link }) => (
        <div key={id} className={isFooter ? classes.footerItem : classes.headerItem}>
          <NavLink to={link} className={classes.link}>
            {name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
