import {StyleSheet} from 'react-native';

import {ThemeColor} from '../../config/theme';

export const styles = (theme: ThemeColor) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.pureblack,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      width: '80%',
      height: '50%',
    },
  });
