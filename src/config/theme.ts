import {colors} from './colors';

export interface ThemeColor {
  pureWhite: string;
  darkOrchid: string;
  pureblack: string;
  offWhite: string;
  green: string;
  red: string;
  //Do not delete below Keys
  primary: string;
  background: string;
  mainBackground: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export interface I_ThemeProps {
  dark: boolean;
  colors: ThemeColor;
}

export const darkColors: ThemeColor = {
  pureWhite: colors.pureWhite,
  darkOrchid: colors.darkOrchid,
  pureblack: colors.pureBlack,
  offWhite: colors.offWhite,
  green: colors.green,
  red: colors.red,
  //Do not delete below Keys
  primary: colors.pureWhite,
  background: colors.pureWhite,
  mainBackground: colors.pureWhite,
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
};

export const lightColors: ThemeColor = {
  pureWhite: colors.pureWhite,
  darkOrchid: colors.darkOrchid,
  pureblack: colors.pureBlack,
  offWhite: colors.offWhite,
  green: colors.green,
  red: colors.red,
  //Do not delete below Keys
  primary: colors.pureWhite,
  background: colors.pureWhite,
  mainBackground: colors.pureWhite,
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
};
