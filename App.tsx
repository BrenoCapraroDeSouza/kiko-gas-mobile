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
import { Image, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeProvider } from 'styled-components';

import { Button, Input } from '@/components';
import { PRIMARY_LOGO } from '@/config';
import { theme } from '@/styles';

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
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          gap: RFValue(16),
          padding: RFValue(20),
        }}
      >
        <ThemeProvider theme={theme}>
          <StatusBar
            style='light'
            backgroundColor={theme.colors.transparent}
            animated
            translucent
            networkActivityIndicatorVisible
          />
          <View style={{ marginBottom: RFValue(64) }}>
            <Image
              source={PRIMARY_LOGO}
              style={{ width: RFValue(172.5), height: RFValue(119.5) }}
            />
          </View>
          <View style={{ gap: 24, marginBottom: 64 }}>
            <Input variant='email' placeholder='E-mail' />
            <Input variant='password' placeholder='Senha' />
          </View>
          <Button title='Entrar' variant='primary' />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
