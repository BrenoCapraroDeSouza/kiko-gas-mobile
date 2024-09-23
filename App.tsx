import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (isFontsLoaded) SplashScreen.hideAsync();
  }, [isFontsLoaded]);

  if (!isFontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='dark'
        backgroundColor={theme.colors.transparent}
        animated
        translucent
        networkActivityIndicatorVisible
      />

      <Text>Hello Word!</Text>
    </ThemeProvider>
  );
}
