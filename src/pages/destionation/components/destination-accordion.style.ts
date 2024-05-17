import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';
import { createUseStyles } from 'react-jss';

const styles = {
    imageContainer: {
        flex: '0 0 auto',
        display:'flex',
        margin:'0 auto',
        [breakpoint(768)]: {
    
        },
        
      },
      contentContainer: {
        flex: '1 1 auto',
        display:'flex',
        flexDirection:'row',
        [breakpoint(768)]: {
         flexDirection:'column'
        },
      },
      distanceContainer: {
        marginTop: rem(16),
      },
      image: {
        maxWidth: '100%',
        height: 'auto',
        [breakpoint(768)]: {
          width: '80%',
          margin:'auto'
        },
        [breakpoint(375)]: {
          width: '80%',
          margin:'auto'
        },
      },
};
 export const useDestinationAccordionStyles = createUseStyles(styles);