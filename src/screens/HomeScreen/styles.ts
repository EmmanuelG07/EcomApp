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
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconHolder: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      ...fonts.bold,
      fontSize: 25,
      color: theme.darkOrchid,
      marginLeft: 20,
    },
    commonColor: {
      color: theme.darkOrchid,
    },
    subContainer: {
      padding: 10,
      flex: 1,
      backgroundColor: theme.offWhite,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    inputMainStyle: {
      backgroundColor: theme.pureWhite,
      borderRadius: 20,
      width: '100%',
      height: 40,
    },
    inputTextStyle: {
      ...fonts.regular,
      fontSize: 16,
      color: theme.pureblack,
      textAlignVertical: 'center',
      paddingVertical: 9,
      paddingHorizontal: 17,
    },
    productTextStyle: {
      ...fonts.bold,
      fontSize: 30,
      color: theme.darkOrchid,
      marginVertical: 15,
    },
    flatlistContainer: {
      paddingBottom: 100,
    },
    emptyCard: {
      width: Dimensions.get('window').width / 2 - 30,
      borderRadius: 10,
      elevation: 2,
      marginHorizontal: 10,
      marginVertical: 10,
      backgroundColor: '#fff',
      height: 200,
    },
    noDataView: {
      width: '100%',
      height: 400,
      backgroundColor: theme.pureWhite,
      borderRadius: 20,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noDataText: {
      ...fonts.bold,
      fontSize: 20,
      color: theme.darkOrchid,
    },
  });
