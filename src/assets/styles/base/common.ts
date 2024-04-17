import fonts from '../abstracts/fonts';
import colors from '../abstracts/color';
import sizes from '../abstracts/sizes';

const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            fontFamily: fonts.fontMain,
            margin: 0,
            backgroundColor: colors.mainBg,
            color:colors.textBlack
        },
        a: {textDecoration: 'none', '&:hover': {color: '#414D44',},},
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        p:{ color:colors.textBlack},
        '::-webkit-scrollbar': {width: 7, height: 7,},
        '::-webkit-scrollbar-track': {boxShadow: `inset 0 0 2px ${colors.mainBg}`,},
        '::-webkit-scrollbar-thumb': {background: colors.mainBg,},
    },
};

export default commonStyles;
