import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {I_ThemeProps} from '../../config/theme';
import {styles} from './styles';
import {MainStackList} from '../../navigation/types';

type NavigationProps = NativeStackNavigationProp<MainStackList, 'SplashScreen'>;

const SplashScreen = () => {
  const {colors} = useTheme() as I_ThemeProps;
  const currentStyles = styles(colors);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);
  }, []);

  return (
    <View style={currentStyles.mainContainer}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={currentStyles.imageStyle}
      />
    </View>
  );
};

export default SplashScreen;
