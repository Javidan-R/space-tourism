import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles, Styles } from 'react-jss';
import './header.style';

const styles: Styles = {
  header: {
    position: 'fixed',
    width: '100%',
    marginTop: rem(30),
    top: 0,
    zIndex: 100,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: rem(48),
    height: rem(48),
    borderRadius: '50%',
    backgroundColor: colors.white,
    marginLeft: rem(50),
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease',
  },
  overlayOpen: {
    opacity: 1,
    pointerEvents: 'all',
  },
  menu: {
    margin: rem(100) + '' + rem(0),
    paddingRight: rem(100),
    backgroundColor: colors.mainBg,
    backdropFilter: 'blur(8px)',
    '& .ant-menu-item': {
      margin: '0 10px',
      color:colors.light
    },
  },
  menuItem:{
    color: colors.light,
  },
  menuLink: {
    marginRight: rem(20),
   
  },
};

export const useHeaderStyles = createUseStyles(styles);
