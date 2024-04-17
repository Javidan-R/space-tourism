import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import { breakpoint, transition } from 'assets/styles/abstracts/mixins';

const useMenuStyles = createUseStyles({
  open: {
    display: 'flex',
    position: 'fixed',
    zIndex: '1000',
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    backgroundColor: colors.mainColor,
    flexDirection: 'column', // Menyu elementlərinin sütun şəklində düzəlməsi
    alignItems: 'center', // Menyu maddələrinin orta şəkildə düzəlməsi
    justifyContent: 'center', // Menyu maddələrinin orta şəkildə düzəlməsi
  },
  headerMenu: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    [breakpoint(768)]: {
      display: 'none',
    },
  },
  footerMenu: {
    display: 'block',
    padding: 0,
  },
  headerItem: {
    position: 'relative',
    '&:hover, &:focus': {
      '& $link': {
        color: colors.mainGreen,
      },
      '&::before': {
        content: '\'\'',
        position: 'absolute',
        left: rem(-10),
        top: '50%',
        transform: 'translateY(-50%)',
        width: rem(6),
        height: rem(6),
        borderRadius: '50%',
        background: colors.mainGreen,
      },
    },
  },
  footerItem: {
    display: 'block',
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: colors.textBlack,
    fontFamily: fonts.fontMain,
    fontSize: rem(16),
    lineHeight: rem(24),
    transition: transition('color'),
    '&:hover': {
      color: colors.mainGreen,
    },
    '&$active': {
      color: colors.mainGreen,
    },
  },
  active: {
    color: colors.mainGreen,
  },
  itemText: {
    display: 'flex',
    alignItems: 'center',
    padding: rem(10) + ' ' + rem(20),
  },
  mobileMenuIcon: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    color: colors.mainColor,
    fontSize: rem(24),
    textDecoration: 'none',
    cursor: 'pointer',
    zIndex: '1000',
    [breakpoint(800)]: {
      display: 'block',
      color: colors.dark,
      zIndex: '1001',
    },
    [breakpoint(768)]: {
      display: 'block',
      color: colors.dark,
      zIndex: '1003',
    },
  },
});

export default useMenuStyles;
