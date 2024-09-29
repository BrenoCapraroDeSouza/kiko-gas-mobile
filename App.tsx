import 'react-native-gesture-handler';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { ThemeProvider } from 'styled-components';

import { DEFAULT_TOAST_TIME } from '@/config';
import { getStatusBarHeight } from '@/helpers';
import { Routes } from '@/routes';
import { theme, toastContainerStyle, toastTextStyle } from '@/styles';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider theme={theme}>
            <StatusBar
              style='light'
              backgroundColor={theme.colors.transparent}
              animated
              translucent
              networkActivityIndicatorVisible
            />

            <ToastProvider
              placement='top'
              swipeEnabled
              duration={DEFAULT_TOAST_TIME}
              style={toastContainerStyle}
              textStyle={toastTextStyle}
              offsetTop={getStatusBarHeight()}
            >
              <Routes />
            </ToastProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
