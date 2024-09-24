import { RFValue } from 'react-native-responsive-fontsize';

export const theme = {
  colors: {
    primary: '#FF6C25',
    primary50: 'rgba(255, 108, 37, 0.5)',

    secondary: '#FFF',
    secondary70: 'rgba(255, 255, 255, 0.7)',

    background: '#000',
    overlay40: 'rgba(0, 0, 0, 0.4)',
    content: '#151515',

    transparent: 'transparent',
  },

  fontFamilies: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    semiBold: 'Poppins_600SemiBold',
  },

  fontSizes: {
    title: RFValue(24),
    alternative: RFValue(20),
    body: RFValue(16),
  },

  boxShadow: {
    shadowColor: '#FF6C25',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
};
