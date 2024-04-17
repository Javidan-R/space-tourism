import React from 'react';
import { NavLink } from 'react-router-dom';
import useMenuStyles from './menu-item.style';

interface MenuItemComponentProps {
  name: string;
  link: string;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ name, link }) => {
  const classes = useMenuStyles();

  return (
    <li>
      <NavLink className={classes.link} to={{ pathname: link }}>
        <div className={classes.itemText}>
          <span className={classes.itemText}>{name}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default MenuItemComponent;
