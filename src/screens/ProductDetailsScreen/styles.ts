import {Dimensions, StyleSheet} from 'react-native';

import {fonts} from '../../config/fonts';
import {ThemeColor} from '../../config/theme';

export const styles = (theme: ThemeColor) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.pureWhite,
    },
    headerContainer: {
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      ...fonts.bold,
      fontSize: 25,
      color: theme.darkOrchid,
      marginLeft: 20,
    },
    arrowStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    subContainer: {},
    imageContainer: {
      elevation: 5,
    },
    imageStyle: {
      width: Dimensions.get('window').width,
      height: 400,
      aspectRatio: 1,
      resizeMode: 'stretch',
    },
    infoView: {
      paddingTop: 10,
      rowGap: 10,
      paddingHorizontal: 10,
    },
    titleText: {
      ...fonts.bold,
      fontSize: 30,
      color: theme.darkOrchid,
    },
    rateView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    commontext: {
      ...fonts.regular,
      fontSize: 16,
      color: theme.darkOrchid,
    },
    priceView: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: theme.darkOrchid,
      borderRadius: 10,
      marginTop: 20,
    },
    priceText: {
      ...fonts.regular,
      fontSize: 30,
      color: theme.pureblack,
    },
    buttonMain: {
      backgroundColor: theme.darkOrchid,
      flexDirection: 'row',
      padding: 8,
      alignItems: 'center',
      borderRadius: 8,
    },
    addCarttext: {
      ...fonts.regular,
      fontSize: 16,
      color: theme.pureWhite,
    },

    noDataFoundView: {
      flex: 1,
      height: 400,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.darkOrchid,
      backgroundColor: theme.offWhite,
    },

    noDataText: {
      ...fonts.bold,
      fontSize: 30,
      color: theme.darkOrchid,
    },

    shimmerImage: {
      width: Dimensions.get('window').width,
      height: 400,
      backgroundColor: theme.darkOrchid,
    },
    shimmerTitle: {
      width: '40%',
      height: 40,
      marginTop: 10,
      marginLeft: 10,
    },
    shimmerRating: {
      width: '60%',
      height: 30,
      marginTop: 10,
      marginLeft: 10,
    },
    shimmerStock: {
      width: '40%',
      height: 30,
      marginTop: 10,
      marginLeft: 10,
    },
    shimmerDescrip: {
      width: '80%',
      height: 20,
      marginTop: 10,
      marginLeft: 10,
    },
    shimmerPrice: {
      width: '95%',
      height: 50,
      marginTop: 20,
      marginHorizontal: 10,
      borderRadius: 10,
    },
  });
