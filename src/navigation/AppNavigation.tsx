import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {MainStackList} from './types';
import HomeScreen from '../screens/HomeScreen';
import {darkColors, lightColors} from '../config/theme';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SplashScreen from '../screens/SplashScreen';

const AppNavigation = () => {
  const MainStack = createNativeStackNavigator<MainStackList>();

  const MyDarkTheme = {
    dark: true,
    colors: darkColors,
  };
  const MyLightTheme = {
    dark: false,
    colors: lightColors,
  };

  return (
    <NavigationContainer
      theme={useColorScheme() === 'dark' ? MyDarkTheme : MyLightTheme}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="SplashScreen" component={SplashScreen} />
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen
          name="ProductDetialsScreen"
          component={ProductDetailsScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
