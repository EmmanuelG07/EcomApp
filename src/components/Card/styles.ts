import {Dimensions, StyleSheet} from 'react-native';

import {fonts} from '../../config/fonts';
import {ThemeColor} from '../../config/theme';

export const styles = (theme: ThemeColor) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.pureWhite,
      width: Dimensions.get('window').width / 2 - 30,
      borderRadius: 10,
      elevation: 2,
      marginHorizontal: 10,
      marginVertical: 10,
    },
    imageStyle: {
      width: '100%',
      height: 150,
    },
    imgaeBorderStyle: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: '100%',
      height: 150,
      resizeMode: 'stretch',
    },
    discountHolder: {
      backgroundColor: theme.darkOrchid,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      maxWidth: 50,
      marginHorizontal: 5,
      marginVertical: 5,
      borderRadius: 15,
    },
    discountText: {
      ...fonts.regular,
      fontSize: 16,
      color: theme.pureWhite,
    },
    detailsHolder: {
      padding: 5,
      rowGap: 5,
    },
    productTitle: {
      ...fonts.medium,
      fontSize: 20,
      color: theme.darkOrchid,
    },
    descriptionText: {
      ...fonts.regular,
      fontSize: 16,
      color: theme.darkOrchid,
    },
    amountHolder: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    amountText: {
      ...fonts.medium,
      fontSize: 20,
      color: theme.darkOrchid,
    },
  });
