import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
const styles = {
  headerNavbar: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  logoContainer: {
    width: rem(150),
  },
};

export const useHeaderNavbarStyles = createUseStyles(styles);
