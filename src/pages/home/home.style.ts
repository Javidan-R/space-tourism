import colors from 'assets/styles/abstracts/color';
import { createUseStyles } from 'react-jss';
import second from '../../assets/images/statics/home-right.png';
import first from '../../assets/images/statics/home-right.svg';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';

export const useHomeStyles = createUseStyles({
  backgorundPage: {
    backgroundColor: colors.mainBg,
    backgroundImage: `url(${second})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    position: 'relative',
    zIndex: 0,
    [breakpoint(768)]:{
      flexDirection:'column'
    }
  },
  backgroundRight: {
    backgroundColor: colors.mainBg,
    backgroundImage: `url(${first})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minWidth: '40%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    position: 'absolute',
    zIndex: 3,
    [breakpoint(768)]: {
      transform: 'rotate(90deg)', // Tablet görünüşdə döndürməyi çıxar
      position: 'relative',
      height:'100%',
      overflowX:'hidden'
      


    },
  },
});
