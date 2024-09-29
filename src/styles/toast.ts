import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { theme } from './theme';

export const toastContainerStyle: StyleProp<ViewStyle> = {
  width: '100%',

  backgroundColor: theme.colors.content,

  borderWidth: 1,
  borderColor: theme.colors.secondary,
  borderRadius: 4,
};

export const toastTextStyle: StyleProp<TextStyle> = {
  fontSize: theme.fontSizes.small,
  fontFamily: theme.fontFamilies.medium,

  color: theme.colors.secondary,
};
