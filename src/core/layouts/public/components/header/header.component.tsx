import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Divider } from 'antd';
import { Routes } from '../../../../../router/routes';
import { Logo } from 'assets/images/statics/logo';
import classNames from 'classnames';
import { useHeaderStyles } from './header.style';
import './header.style';
// import useLocalization from 'assets/lang';
// import { Routes } from 'router/routes';
// import { Header } from 'antd/es/layout/layout';

// import { themeConfig } from '../../../../configs/theme.config'; // Yeni əlavə edilmiş mövzular
const HeaderComponent = () => {
  const classes = useHeaderStyles();
  // const translate = useLocalization();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenuHandler = useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);
  // const navActivation = useCallback(({isActive}:{isActive:boolean}) => (
  //     classNames(
  //         {
  //             [classes.activeNavEl]:isActive,
  //             [classes.NavEl]:!isActive
  //         }
  //     )
  // ), [classes.NavEl, classes.activeNavEl]);

  // const navigations = useMemo(() => (
  //     [
  //         {
  //             url:Routes.home,
  //             text:translate('homepage')
  //         },
  //         {
  //             url:Routes.destination,
  //             text:translate('about')
  //         },
  //         {
  //             url:Routes.crew,
  //             text:translate('products')
  //         },
  //         {
  //             url:Routes.technology,
  //             text:translate('partners')
  //         }
  //     ]
  // ), [translate]);

  // const headerClasses = useMemo(() => (
  //     classNames({
  //         [classes.header]:true,
  //         container:true,
  //     })
  // ), [classes.containerSm]);

  // const menuBtnClasses = useMemo(() => (
  //     classNames({
  //         'd-block d-lg-none':true,
  //         [classes.menuBtn]:true
  //     })
  // ), [classes.menuBtn]);

  // const menuClasses = useMemo(() => (
  //     classNames({
  //         [classes.menuOpen]:isMenuOpened,
  //         [classes.menu]:!isMenuOpened,
  //     })
  // ), [classes.menu, classes.menuOpen, isMenuOpened]);

  const overLayClasses: string = useMemo(
    () =>
      classNames({
        [classes.overlayOpen]: isMenuOpened,
        [classes.overlay]: !isMenuOpened,
      }),
    [classes.overlay, classes.overlayOpen, isMenuOpened]
  );

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Divider orientation = 'right'>
        <Menu mode='horizontal' defaultSelectedKeys={['1']} className={classes.menu}>
          <Menu.Item key='1' className={classes.menuItem}>
            <Link to={Routes.default} className={classes.menuLink}>Home</Link> 
          </Menu.Item>
          <Menu.Item key='2' className={classes.menuItem}>
            <Link to={Routes.destination} className={classes.menuLink}>Destionation</Link>
          </Menu.Item>
          <Menu.Item key='3' className={classes.menuItem}>
            <Link to={Routes.crew} className={classes.menuLink}>Crew</Link>
          </Menu.Item>
          <Menu.Item key='4' className={classes.menuItem}>
            <Link to ={Routes.technology} className={classes.menuLink}>Technology</Link>
          </Menu.Item>
        </Menu>
        </Divider>
      </div>
      <div className={overLayClasses} onClick={openMenuHandler}></div>
    </>
  );
};

export default HeaderComponent;
