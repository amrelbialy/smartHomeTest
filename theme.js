import { DefaultTheme } from 'react-native-paper';

const colors = {
  text: '#000000',
  accent: '#FE5F55',
  black: '#292934',
  white: '#FFFFFF',
  gray: '#A7A7A7',
  gray2: '#ECEDEF',
  button: '#F4F5F7',
  secondary: '#414757',
  error: '#f13a59',
};

const sizes = {
  base: 14,
  font: 14,
  welcome: 18,
  name: 21,
  h1: 140,
  button: 16,
};

const fonts = {
  welcome: {
    fontSize: sizes.welcome,
    color: colors.gray,
    letterSpacing: -0.6,
    lineHeight: sizes.welcome + 4,
  },
  name: {
    fontSize: sizes.name,
    fontWeight: '600',
    color: colors.black,
    letterSpacing: -1.1,
    lineHeight: sizes.name + 4,
  },
  caption: {
    fontSize: sizes.welcome,
    color: colors.gray,
    letterSpacing: -0.6,
    lineHeight: sizes.welcome + 4,
  },
  h1: {
    fontSize: sizes.h1,
    color: colors.black,
    letterSpacing: -10,
    lineHeight: sizes.h1,
  },
  button: {
    fontSize: sizes.button,
    color: colors.black,
    fontWeight: '600',
    letterSpacing: -0.4,
    lineHeight: sizes.button + 4,
  },
};

export const theme = {
  ...DefaultTheme,
  colors,
  sizes,
  fonts,
};