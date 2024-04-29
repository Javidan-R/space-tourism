import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import sizes from 'assets/styles/abstracts/sizes';
import { color } from 'framer-motion';
import {createUseStyles, Styles} from 'react-jss';

const styles:Styles = {
  // header: {
  //   position: 'fixed',
  //   width: '100%',
  //   top: 0,
  //   zIndex: 100,
  //   left: 0,
  // },
  header: {

  },
  // NavEl: {
  //   color:colors.textMain,
  //   fontWeight:sizes.boldest
  // },
  // activeNavEl: {
  //   color:colors.greenMain,
  //   fontWeight:sizes.boldest

  // },
  containerSm: {
    maxWidth:rem(1240)
  },
  menuBtn: {
    cursor:'pointer'
  },
  menu: {
    width:rem(700),
    height:rem(700),
    backgroundColor:colors.white,
    borderRadius:sizes.borderRadiusCircle,
    position:'fixed',
    top:rem(-700),
    transition:transition('all', 0.4, 'ease'),
    right:rem(-700),
  },
  menuOpen: {
    width:rem(850),
    height:rem(850), 
    backdropFilter:'blur(25px)',
    borderRadius:sizes.borderRadiusCircle,
    transition:transition('all', 0.4, 'ease'),
    position:'fixed',
    top:rem(-300),
    right:rem(-300),
    '@media(max-width:992px)': {
      width:rem(650),
      height:rem(650)
    },
    zIndex:22,
  },
  overlayOpen: {
    position:'fixed',
    top:rem(0),
    left:rem(0),
    backdropFilter:'blur(5px)',
    right:rem(0),
    bottom:rem(0),
    transition:transition('all', 0.4, 'ease'),
    zIndex:5
  },
  overlay: {
    position:'fixed',
    top:rem(0),
    left:rem(0),
    backdropFilter:'blur(10px)',
    right:rem(0),
    bottom:rem(0),
    zIndex:-10,
    transition:transition('all', 0.4, 'ease'),
  },
  innerMenu: {
    position:'absolute',
    bottom:rem(70),
    left:rem(170)
  }
};

export const useHeaderStyles = createUseStyles(styles);
