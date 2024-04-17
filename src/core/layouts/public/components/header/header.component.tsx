import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import { useHeaderStyles } from './header.style';

const HeaderComponent = () => {
  const classes = useHeaderStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={classes.header}>
      <div className='row'>
        <div className='col-12 p-0'>
          <div className={classes.mobileHeader}>
            <Link to='#' className={classes.mobileMenuIcon} onClick={handleMobileMenuToggle}>
              <FaBars />
            </Link>
          </div>
          <HeaderNavbarComponent isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
