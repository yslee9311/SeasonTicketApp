import { Dimensions } from 'react-native';

export default {
  SCREENWIDTH: Dimensions.get('screen').height > Dimensions.get('screen').width ? Dimensions.get('screen').width : Dimensions.get('screen').height,
  SCREENHEIGHT: Dimensions.get('screen').height > Dimensions.get('screen').width ? Dimensions.get('screen').height : Dimensions.get('screen').width,
  startOrientation: Dimensions.get('window').height > Dimensions.get('window').width ? 'portrait' : 'landscape',
  WIDTH: Dimensions.get('window').height > Dimensions.get('window').width ? Dimensions.get('window').width : Dimensions.get('window').height,
  HEIGHT: Dimensions.get('window').height > Dimensions.get('window').width ? Dimensions.get('window').height : Dimensions.get('window').width,
  // ratioW: Dimensions.get('window').width / 360,
  // ratioH: Dimensions.get('window').height / 692,
  // ratioW: Dimensions.get('window').width / 375,
  // ratioH: Dimensions.get('window').height / 667,
  ratioW: Dimensions.get('window').height > Dimensions.get('window').width ? Dimensions.get('window').width / 375 : Dimensions.get('window').height / 375,
  ratioH: Dimensions.get('window').height > Dimensions.get('window').width ? Dimensions.get('window').height / 667 : Dimensions.get('window').width / 667,
};
