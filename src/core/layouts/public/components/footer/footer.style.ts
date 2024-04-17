import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
  footer: {
    backgroundColor: colors.footerColor,
    padding: rem(50) + ' ' + rem(50) + ' ' + rem(50),
    color: colors.textBlack,
    height:'100%'
  },
  footerContainer: {
    margin: '0 auto',
  },
  footerText: {
    lineHeight: rem(24),
    paddingTop:rem(13)
  },
  socialLinks: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginTop: rem(20),
  },
  social: {
    marginRight: rem(10),
    '&:last-child': {
      marginRight: 0,
    },
    '& svg': {
      width: rem(24),
      height: rem(24),
      color: colors.mainColor,
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      marginBottom: rem(10),
      '& a': {
        color: colors.textBlack,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        '& i': {
          marginRight: rem(10),
        },
      },
    },
  },
};

export const useFooterStyles = createUseStyles(styles);

