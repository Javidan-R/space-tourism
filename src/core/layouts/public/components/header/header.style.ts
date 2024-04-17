import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';

const styles = {
  header: {
    width: '100%',
    minHeight: rem(10),
    paddingTop: rem(20),
  },
  mobileHeader: {
    display: 'none', 
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: rem(20), 
    [breakpoint(768)]: {
      display: 'flex',

    },
  },
  mobileMenuIcon: {
    color:colors.mainColor, 
    fontSize: rem(24), 
    textDecoration: 'none',
    cursor: 'pointer',
    
  },
};

export const useHeaderStyles = createUseStyles(styles);
