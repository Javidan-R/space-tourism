import './header.style';
import {useHeaderStyles} from './header.style';
import { useCallback, useMemo, useState } from 'react';
import useLocalization from 'assets/lang';
import { Routes } from 'router/routes';
import classNames from 'classnames';
import { Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { Logo } from 'assets/images/statics/logo';

const HeaderComponent = () => {
    const classes = useHeaderStyles();
    const translate = useLocalization();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const openMenuHandler = useCallback(() => {
        setIsMenuOpened(!isMenuOpened);
    }, [isMenuOpened]);
    const navActivation = useCallback(({isActive}:{isActive:boolean}) => (
        classNames(
            {
                [classes.activeNavEl]:isActive,
                [classes.NavEl]:!isActive
            }
        )
    ), [classes.NavEl, classes.activeNavEl]);


    const navigations = useMemo(() => (
        [
            {
                url:Routes.home,
                text:translate('homepage')
            },
            {
                url:Routes.destination,
                text:translate('about')
            },
            {
                url:Routes.crew,
                text:translate('products')
            },
            {
                url:Routes.technology,
                text:translate('partners')
            }
        ]
    ), [translate]);
   
    const headerClasses = useMemo(() => (
        classNames({
            [classes.header]:true,
            container:true,
        })
    ), [classes.containerSm]);

    const menuBtnClasses = useMemo(() => (
        classNames({
            'd-block d-lg-none':true,
            [classes.menuBtn]:true
        })
    ), [classes.menuBtn]);

    const menuClasses = useMemo(() => (
        classNames({
            [classes.menuOpen]:isMenuOpened,
            [classes.menu]:!isMenuOpened,
        })
    ), [classes.menu, classes.menuOpen, isMenuOpened]);


    const overLayClasses:string = useMemo(() => (
        classNames({
            [classes.overlayOpen]:isMenuOpened,
            [classes.overlay]:!isMenuOpened,
        })
    ), [classes.overlay, classes.overlayOpen, isMenuOpened]);

    return (
        <div>
            <Header>
                <Logo/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Services</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
            </Header>
            
            
           
            <div className={overLayClasses} onClick={openMenuHandler}>

            </div>
        </div>
    );
};


export default HeaderComponent;
