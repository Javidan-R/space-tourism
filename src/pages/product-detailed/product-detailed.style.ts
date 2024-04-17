import colors from "assets/styles/abstracts/color";
import fonts from "assets/styles/abstracts/fonts";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

 const styles = {
    // Ümumi stillər
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
        color: colors.mainColor,
        margin: rem(50) + ''+ rem(0),
        lineHeight:rem(70),
    },
    productTitle: {
        fontSize: rem(40),
        color: colors.textBlack,
        margin: rem(20) + ''+ rem(0),
        lineHeight:rem(50),
    },

    // Məzmun üçün stillər
    productDescription: {
        fontWeight:fonts.fontMain,
      fontSize: rem(16),
      color: colors.mainColor,
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
      color: colors.mainColor,
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
  };
  export const ProductDetailedStyles = createUseStyles(styles);
