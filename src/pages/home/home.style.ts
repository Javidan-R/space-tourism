import colors from 'assets/styles/abstracts/color';
import { createUseStyles } from 'react-jss';

export const useHomeStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  desc: {
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '2rem',
    maxWidth: '80%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    padding: '0.5rem 2rem',
    borderRadius: '0.5rem',
    margin: '0 1rem',
    cursor: 'pointer',
    fontSize: '.9rem',
  },
  videoSection: {
    padding: '40px',
    backgroundColor: '#f5f5f5',
  },
  videoContainer: {
    position: 'relative',
    maxWidth: '100%',
    width: '800px', // Adjust as needed
    margin: 'auto',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  videoPlaceholder: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
  },
  playIcon: {
    color: '#fff',
    fontSize: '3rem',
  },
  videoPlayer: {
    width: '100%',
    height: 'auto',
    zIndex: 0,
  },
  videoDescription: {
    marginTop: '20px',
  },
  aboutUsSection: {
    padding: '40px',
    backgroundColor: '#ffffff',
  },
  aboutUsContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productsSection: {
    padding: '40px',
    backgroundColor: '#f5f5f5',
  },
  productsContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // formSection: {
  //   padding: '40px',
  //   backgroundColor: '#ffffff',
  // },
  // formContent: {
  //   maxWidth: '100%',
  //   margin: 'auto',
  // },
  // form: {
  //   marginTop: '20px',
  //   '& label': {
  //     display: 'block',
  //     marginBottom: '5px',
  //     color: colors.black,
  //   },
  //   '& input': {
  //     width: '100%',
  //     marginBottom: '10px',
  //     padding: '10px',
  //     border: `1px solid ${colors.black}`,
  //     borderRadius: '5px',
  //   },
  //   '& input[type="checkbox"]': {
  //     display: 'inline-block',
  //     marginRight: '5px',
  //   },
  // },
  // formRow: {
  //   marginBottom: '20px',
  // },


  // 


  
  
});