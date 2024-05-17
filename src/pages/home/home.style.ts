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
  leftContent: {
    padding: '20px',
     [breakpoint(768)]: {
      justifyContent: 'center', // Or any other styling you want for smaller screens
    },
  },
  rightContent: {
    padding: '20px',
     [breakpoint(768)]: {
      display: 'none', // Or any other styling you want for smaller screens
    },
  },
  title: {
    fontSize: rem(28),
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a text shadow for better readability
  },
  name: {
    fontSize: rem(130),
    margin: rem(20)+' '+rem(0)
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding:rem(50),
    [breakpoint(768)]: {
      flexDirection: 'column', // Tablet görünüşdə sütun olaraq düzəlt
      alignItems: 'flex-start', // Tablet görünüşdə sol tərəfə yaslan
      marginTop: rem(100), // Üst boşluğu artır
    },
  },
  textContainer: {
    width: '50%', // Adjust as needed
     [breakpoint(768)]: {
      width: '100%', // Or any other styling you want for smaller screens
    },
  },
  paragraph: {
    width: '100%', // Adjust as needed
     [breakpoint(768)]: {
      width: '100%', // Or any other styling you want for smaller screens
    },
  },
  imageContainer: {
    padding:rem(50),
    position:'relative',
    [breakpoint(768)]: {
      width: '100%', 
    },
  },
  imageText:{
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: rem(28),
    color: colors.black,
    zIndex: 1,
     [breakpoint(768)]: {
      transform: 'rotate(270deg)', 
      left:'35%',
      top:'46%',
      fontSize:rem(26)
    },
    [breakpoint(425)]: {
      left:'35%',
      top:'46%',
      fontSize:rem(18)
    },
  },
  explore:{
    width:rem(250),
    height:rem(250),
    backgroundColor:colors.light,
    borderRadius:'50%',
    [breakpoint(768)]: {
      width:rem(200),
    height:rem(200),
    },
    [breakpoint(425)]: {
      width:rem(100),
    height:rem(100),
    },
  }
});
