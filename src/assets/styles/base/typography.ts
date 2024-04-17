import westBold from '../../fonts/West/WestTrial-Bold.otf';
import westLight from '../../fonts/West/WestTrial-Light.otf';
import westSemiBold from '../../fonts/West/WestTrial-Black.otf';
import westRegular from '../../fonts/West/WestTrial-Regular.otf';
import westThin from '../../fonts/West/WestTrial-ExtraLight.otf';
import westXBlack from '../../fonts/West/WestTrial-ExtraBold.otf';
const typography = {
  '@font-face': [
    {
      fontFamily: 'West Bold',
      src: `url("${westBold}")`,
    },
    {
      fontFamily: 'West Light',
      src: `url("${westLight}")`,
    },
    {
      fontFamily: 'West Medium',
      src: `url("${westSemiBold}")`,
    },
    {
      fontFamily: 'West Regular',
      src: `url("${westRegular}")`,
    },
    {
      fontFamily: 'West Thin',
      src: `url("${westThin}")`,
    },
    {
      fontFamily: 'West XBlack',
      src: `url("${westXBlack}")`,
    },
  ],
};

export default typography;
