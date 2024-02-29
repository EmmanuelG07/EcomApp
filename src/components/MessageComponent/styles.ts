import {StyleSheet} from 'react-native';

import {fonts} from '../../config/fonts';
import {ThemeColor} from '../../config/theme';

export const styles = (theme: ThemeColor, animation: any) =>
  StyleSheet.create({
    mainHolder: {
      width: '70%',
    },
    subContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 10,
      paddingLeft: 15,
      borderRadius: 6,
      transform: [{translateX: animation}],
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#338500',
    },

    successText: {
      ...fonts.regular,
      fontSize: 16,
      color: '#338500',
      marginLeft: 10,
    },
    errorText: {
      color: '#DE000E',
    },
  });
