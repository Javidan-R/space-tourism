import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { transition } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';

const styles = {
  public: {},
  content: {
    // minHeight: 'calc(100vd - 20px) !important',
    padding: rem(20) + ' ' + rem(50) + ' ' + rem(0),
    transition: transition(),
  },
  active: { marginLeft: 0 },
  footer:{
    backgoundColor:colors.footerColor,


  },

};

export const usePublicLayoutStyles = createUseStyles(styles);
