import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";
import second from '../../assets/images/statics/1.png';


 const styles = {
    // Ümumi stillər
    backgorundPage: {
      backgroundColor: 'transparent',
      backgroundImage: `url(${second})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'cover',
      minWidth:'100vd',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight:'100vh',
      margin:0,
    },
    productDetails: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   padding: '20px',
      backgroundColor: '#f8f9fa',
    },
    // Başlıq üçün stillər
    productName: {
        fontSize: rem(55),
        color: colors.dark,
        margin: rem(50) + ''+ rem(0),
        lineHeight:rem(70),
    },
    productTitle: {
        fontSize: rem(40),
        color: colors.mainGreen,
        margin: rem(20) + ''+ rem(0),
        lineHeight:rem(50),
    },

    // Məzmun üçün stillər
    productDescription: {
        fontWeight:fonts.fontMain,
      fontSize: rem(16),
      color: colors.black,
      marginBottom: '20px',
      lineHeight:rem(30),

    },
    // Şəkil üçün stillər
    productImage: {
      maxWidth: '100%',
      height: 'auto',
      marginBottom: '20px',
    },
    // Kredit haqqında başlıq üçün stillər
    aboutLoan: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: colors.textBlack,
      marginBottom: '20px',
    },
    // Xüsusi məbləğ üçün stillər
    productAmount: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '10px',
    },
    // Loading üçün stillər
    loading: {
      fontSize: '20px',
      color: '#555',
      marginTop: '20px',
    },
    // Xəta üçün stillər
    error: {
      fontSize: '20px',
      color: 'red',
      marginTop: '20px',
    },
  //   loanTitleSecondary: {
  //     color:colors.greenMain,
  //     fontSize:rem(18),
  //     fontWeight:700
  // },
  // loanTitle: {
  //     color:colors.textMain,
  //     fontSize:rem(44),
  //     width:rem(374),
  //     '@media(max-width:768px)': {
  //         width:'auto'
  //     }
  // },
  // rangeInput: {
  //     maxWidth:rem(226),
  //     width:sizes.full,
  //     marginTop:rem(-5),
  //     '@media(max-width:768px)': {
  //         width:'auto'
  //     }
  // },
  // loanResult: {
  //     color:colors.greenMain,
  //     fontSize:rem(20),
  // },
  // loanCalculatorInfo: {
  //     position:'absolute',
  //     left:'-15%',
  //     top:rem(100),
  //     '@media(max-width:992px)': {
  //         position:'relative',
  //         left:'auto',
  //         top:'auto',
  //     }
  // },
  // applyBtn: {
  //     width:rem(320),
  // },
  // inputCredentials: {
  //     maxWidth:rem(320),
  //     width:sizes.full
  // },
  // inputCredentialsContainer: {
  //     '@media(max-width:992px)': {
  //         flexDirection:'column'
  //     }
  // },
  // loanCalculator: {
  //     backgroundColor:colors.fadedBg,
  //     width:'100%',
  //     maxWidth:rem(1000),
  //     marginTop:rem(100),
  //     paddingLeft:'30%',
  //     marginLeft:'auto',
  //     position:'relative',
  //     '@media(max-width:992px)': {
  //         padding:rem(0),
  //         flexDirection:'column',
  //         alignItems:'center',
  //         paddingTop:rem(50),
  //     }
  // },
  };
  export const TechnologyStyles = createUseStyles(styles);
