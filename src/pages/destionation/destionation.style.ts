import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import destinationImage from 'assets/images/statics/destination.png';
// import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';

const styles = {
  destinationBackground: {
    backgroundColor: colors.mainBg,
    backgroundImage: `url(${destinationImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minWidth: '100%',
    minHeight: '100vh',
    position: 'relative',
    [breakpoint(768)]: {
      minHeight: 'auto',
    },
  },
  destinationContainer: {
    backgroundColor: 'transparent',
    position: 'relative',
    paddingTop: '8%',
    width: '80%',
    margin: '0 auto',
    [breakpoint(1140)]: {
      paddingTop: '15%',
      width: '90%',
    },
    [breakpoint(922)]: {
      paddingTop: '20%',
      width: '90%',
    },
    [breakpoint(768)]: {
      paddingTop: '25%',
      width: '90%',
    },
    [breakpoint(375)]: {
      paddingTop: '30%',
      width: '90%'
    },
  },
 
};

export const useDestinationStyles = createUseStyles(styles);